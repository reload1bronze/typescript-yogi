class InvalidDateFormatError extends RangeError {}

class DateIsInTheFutureError extends RangeError {}

function ask() {
  return prompt("When is your birthday?");
}

function parse(
  birthday: string
): Date | InvalidDateFormatError | DateIsInTheFutureError {
  let date = new Date(birthday);
  if (!isValid(date)) {
    return new InvalidDateFormatError("Enter a date in the form YYYY/MM/DD");
  }
  if (date.getTime() > Date.now()) {
    return new DateIsInTheFutureError("Are you a timelord?");
  }
  return date;
}

function isValid(date: Date) {
  return (
    Object.prototype.toString.call(date) === "[object Date]" &&
    !Number.isNaN(date.getTime())
  );
}

let result = parse(ask());
if (result instanceof Error) {
  console.error(result.message);
} else {
  console.info("Date is", result.toISOString());
}
