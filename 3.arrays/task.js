function compareArrays(arr1, arr2) {

    return ((arr1.length === arr2.length) && arr1.every((el, pos) => el === arr2[pos]));
}

function getUsersNamesInAgeRange(users, gender) {

  return (users.filter((el) => (el.gender === gender))
        .reduce((ageSum, el, i, arr) => {
            if (i < (arr.length - 1)) {
                return ageSum + el.age;
            } else {
                return (ageSum + el.age) / arr.length;
            }
        }, 0));
}