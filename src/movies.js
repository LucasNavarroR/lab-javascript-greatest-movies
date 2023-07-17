// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((point) => {
    return point.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let cantidadPelisSpilberg = 0;
  moviesArray.filter((point) => {
    if (point.director === "Steven Spielberg" && point.genre.includes("Drama"))
      return cantidadPelisSpilberg++;
  });
  return cantidadPelisSpilberg;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let AvgScore =
    moviesArray.reduce((acc, each) => {
      if (each.score !== undefined) {
        return acc + Number(each.score);
      } else {
        return acc;
      }
    }, 0) / moviesArray.length;

  let avg2decimales = AvgScore.toFixed(2);
  return parseFloat(avg2decimales);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let AvgScore = moviesArray.reduce((acc, each) => {
    if (each.score !== undefined && each.genre.includes("Drama")) {
      return acc + Number(each.score);
    } else {
      return acc;
    }
  }, 0);
  let cuantiaDeDrama = 0;

  moviesArray.filter((each) => {
    if (each.genre.includes("Drama")) {
      cuantiaDeDrama++;
    }
  });

  if (cuantiaDeDrama === 0) {
    return 0;
  }

  AvgScore = AvgScore / cuantiaDeDrama;

  let avg2decimales = AvgScore.toFixed(2);

  return parseFloat(avg2decimales);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let cloneMoviesArray = JSON.parse(JSON.stringify(moviesArray));

  let cloneMoviesArray1 = cloneMoviesArray.sort((elem2, elem1) => {
    if (elem2.year > elem1.year) {
      return 1;
    } else if (elem2.year < elem1.year) {
      return -1;
    } else {
      return 0;
    }
  })
  let cloneMoviesArray2 = JSON.parse(JSON.stringify(cloneMoviesArray1));

  cloneMoviesArray2.sort((elem2,elem1) => {
    if (elem2.title > elem1.title && elem2.year === elem1.year) {
        return 1;
      } else if (elem2.title < elem1.title && elem2.year === elem1.year) {
        return -1;
      } else {
        return 0;
      }
  })
  ;
  console.log(cloneMoviesArray2)
  return cloneMoviesArray2;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
