//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(args);
        let objectInCache = cache.find((obj) => hash in obj);

        if (objectInCache) {
            console.log("Из кеша: " + objectInCache[hash]);
            return "Из кеша: " + objectInCache[hash];
        }

        let result = func(...args);
        cache.push({[hash]: result});

        if (cache.length > 5) {
            cache.shift();
        }

        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {

    function wrapper(...args) {

    }
    return wrapper;
}
