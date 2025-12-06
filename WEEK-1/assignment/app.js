function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  if (!dobInput) {
    document.getElementById("result").innerText = "Please select your birth date.";
    return;
  }

  const dob = moment(dobInput);
  const now = moment();

  const years = now.diff(dob, 'years');
  dob.add(years, 'years');

  const months = now.diff(dob, 'months');
  dob.add(months, 'months');

  const days = now.diff(dob, 'days');

  document.getElementById("result").innerText =
    `You are ${years} years, ${months} months, and ${days} days old.`;
}
