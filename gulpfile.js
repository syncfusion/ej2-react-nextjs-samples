var gulp = require('gulp');
var glob = require('glob');
var fs = require('fs');
var elasticlunr = require('elasticlunr');
var configRegex = /\[(.*)\]/;
var shelljs = require('shelljs');

function extend(copied, first, second, deep) {
    var result = copied || {};
    var length = arguments.length;
    if (deep) {
        length = length - 1;
    }
    var _loop_1 = function (i) {
        if (!arguments_1[i]) {
            return 'continue';
        }
        var obj1 = arguments_1[i];
        Object.keys(obj1).forEach(function (key) {
            var src = result[key];
            var copy = obj1[key];
            var clone;
            if (deep && isObject(copy)) {
                clone = isObject(src) ? src : {};
                result[key] = extend({}, clone, copy, true);
            }
            else {
                result[key] = copy;
            }
        });
    };
    var arguments_1 = arguments;
    for (var i = 1; i < length; i++) {
        _loop_1(i);
    }
    return result;
}
function isObject(obj) {
    var objCon = {};
    return (!isNullOrUndefined(obj) && obj.constructor === objCon.constructor);
}

 function isNullOrUndefined(value) {
    return value === undefined || value === null;
}

function parseSamplelist(sample) {
    var sampleRegex = sample.match(/(= |=)\[+[^\[]+\]/)[0].replace(/(= |=)\[/, '[').split(/,(| )'samples'+[^,}]+/).join('');
    var rSample = sampleRegex.split(/,(| )"samples"+[^,}]+/).join('');
    var matchSample = JSON.stringify(eval(rSample));
    return JSON.parse(matchSample);
}

/**
 * Generate sample list configurations
 */

gulp.task('sample-list-config', function (done) {
    var imports = '';
    var compRoutes = '';
    var categories = '{';
    var samplelist = fs.readFileSync('./src/common/sample-list.tsx', 'utf8');
    var files = glob.sync('./src/**/config.tsx');
    elasticlunr.clearStopWords();
    var instance = elasticlunr(function () {
        this.addField('component');
        this.addField('name');
        this.setRef('uid');
    });
    var apiData = JSON.parse(fs.readFileSync('./src/common/api-table', 'utf8'));
    var apiReference = {};
    var uid = 0;
    for (var file of files) {
        var parsing = parseSamplelist(samplelist);
        var count = Object.keys(parsing).filter(function (value) {
            if (file.split('/')[2] == parsing[value].path) {
                return value;
            }
        })
        var routeconfig = '';
        var path = file.slice(0, file.lastIndexOf('/'));
        var compName = path.slice(path.lastIndexOf('/') + 1);
        var curfile = JSON.stringify(fs.readFileSync(file, 'utf8'));
        var trimmedFile = curfile.replace(/\\n|\\r/g, '');
        routeconfig = trimmedFile.match(configRegex)[1];
        routeconfig = '{\"value\":[' + routeconfig + ']}';
        routeconfig = routeconfig.replace(/'/g, '"');
        var configCollection = JSON.parse(routeconfig).value;
        var category = {};
        for (var configs of configCollection) {
            category[configs.path.split('/')[1]] = {
                'name': configs.name,
                'category': configs.category
            };
            var curSearchObject = {
                name: configs.name,
                uid: uid,
                path: configs.path
            };
            curSearchObject.component = configs.path.split('/')[0].replace(/-/g, '');
            if (parsing[count] && parsing[count].hideOnDevice == true) {
                curSearchObject.hideOnDevice = parsing[count].hideOnDevice;
            }
            var url = configs.path.split('/')[1];
            instance.addDoc(curSearchObject);
            uid++;
            if (configs.api) {
                var apiList = JSON.parse(configs.api);
                var apiconfig = apiList || {};
                var data = [];
                var canUpdate = false;
                var ObjectKeys = Object.keys(apiconfig);
                for (var key of ObjectKeys) {
                    var classProperties = apiData[key];
                    if (!classProperties) {
                        continue;
                    }
                    var propertyCollection = apiconfig[key];
                    for (var prop of propertyCollection) {
                        var propData = classProperties[prop];
                        if (propData) {
                            canUpdate = true;
                            data.push(propData);
                        }
                    }
                }
                if (canUpdate) {
                    apiReference[curSearchObject.component + '/' + url] = data;
                }
            }

        }
        category['defaultSample'] = configCollection[0].path;
        categories += '"' + compName + '": ' + JSON.stringify(category) + ',\n';
    }
    categories = categories.slice(0, -2) + '\n}';
    var allroutes = fs.readFileSync('./src/common/templates/sample-config-template', 'utf8');
    allroutes = allroutes.replace(/{{imports}}/, imports);
    allroutes = allroutes.replace(/{{routerCollection}}/, compRoutes);
    allroutes = allroutes.replace(/{{category}}/, categories);
    allroutes = allroutes + '\n\n' + 'export let apiList:any=' + JSON.stringify(apiReference);
    fs.writeFileSync('./src/common/sample-config.tsx', allroutes);
    fs.writeFileSync('./src/common/search-index.json', JSON.stringify(instance.toJSON()));
    done();
});

/**
 * Compile locale
 */

gulp.task('create-locale', gulp.series(function (done) {
    var localeJson = glob.sync('./src/**/locale.json', { silent: true });
    if (localeJson.length) {
        var obj = {};
        for (var i = 0; i < localeJson.length; i++) {
            var compentLocale = JSON.parse(fs.readFileSync(localeJson[i]));
            obj = extend({}, obj, compentLocale, true);
        }
        fs.writeFileSync('./src/common/locale-string.tsx', 'export let Locale: Object=' + JSON.stringify(obj) + ';');
    } else {
        fs.writeFileSync('./src/common/locale-string.tsx', 'export let Locale: Object={};');
    }
    done();
}));

/**
 * Compile styles
 */

gulp.task('styles', gulp.series(function (done) {
    gulp.src('./node_modules/@syncfusion/ej2/*.css')
        .pipe(gulp.dest('./public/styles/ej2/'));
    done();
}));

/**
 * Ship Source files
 */

gulp.task('src-ship', function (done) {
    var controls = glob.sync('./src/app/[[]theme[]]/*');
    shelljs.mkdir('-p', './public/src/');
    for (var i = 0; i < controls.length; i++) {
        shelljs.cp('-rf', controls[i], './public/src/');
    }
    done();
});