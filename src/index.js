const DATE_FORMAT = "MM/DD/YYYY";

const DATES_ARR = [
  { start: "01/01/2021", end: "01/05/2021" },
  { start: "01/10/2021", end: "01/15/2021" },
  { start: "01/20/2021", end: "01/25/2021" },
  { start: "01/29/2021", end: "01/31/2021" }
];

export function findGaps(dates) {
  // Code here
  // Take in the array of dates
  // find the gaps between
  // return an array of everything between
  // the dates don't overlap

  // initialize an empty array to save our gaps in
  const gaps = [];
  // initilize an empty object too (currentGap)
  let currentGap = {};
  // loop over dates arr
  for (let i = 0; i < dates.length; i++) {
    const date = dates[i];
    // on the next iteration, set a date 1 day less than the `start` of the next element
    // TODO - first iteration should not save this end date
    let endDate = new Date(date.start);
    endDate.setDate(endDate.getDate() - 1);
    endDate = new Intl.DateTimeFormat("en-US").format(endDate);
    currentGap.end = endDate;
    // that is the `end` of that "gap" save in `currentGap.start`
    // push this new object to the array
    // reset currentGap?
    const thisGap = { ...currentGap }; // make a copy
    if (thisGap.start && thisGap.end) {
      gaps.push(thisGap);
    }
    currentGap = {};
    // set a date equal to one more than the end date in the first object.
    let startDate = new Date(date.end);
    startDate.setDate(startDate.getDate() + 1);

    startDate = new Intl.DateTimeFormat("en-US").format(startDate);
    // TODO - increment to the next day
    // Save in a variable `currentGap.start`
    currentGap.start = startDate;
  }
  return gaps;
}

// Final answer
// [
//   { start: '01/06/2021', end: '01/09/2021' },
//   { start: '01/16/2021', end: '01/19/2021' },
//   { start: '01/26/2021', end: '01/28/2021' }
// ]

console.log("GAPS", findGaps(DATES_ARR));
