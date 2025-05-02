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
            cache.shift();  // удаление самого старого элемента массива
        }

        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }

    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    wrapper.count = 0;        //счетчик вызова функции колбек
    wrapper.allCount = 0;     // счетчик попыток вызова декоратора

    function wrapper(...args) {
        // debugger;
        if (timeoutId === undefined) {   //первый моментальный вызов
            wrapper.count++;
            func(...args);
        } else if (timeoutId) {
            clearTimeout(timeoutId); //удалили текущий таймаут
        }

        timeoutId = setTimeout(() => {
            timeoutId = null;    //сброс Id таймаута
            wrapper.count++;
            func(...args);
        }, delay); //создали таймаут и вызвали колбек

        wrapper.allCount++;
    }

    return wrapper;
}
