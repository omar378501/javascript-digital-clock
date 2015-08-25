$(document).ready(function () {

    setInterval(function () {
        // These 3 variables add a leading '0' to keep the date properly formatted.
        var dateTime = new Date();
        if (!flag) {
           
            var minutesTwoDigitsWithLeadingZero = ("0" + dateTime.getMinutes()).substr(-2);
            var secondsTwoDigitsWithLeadingZero = ("0" + dateTime.getSeconds()).substr(-2);
            var millisecondsTwoDigitsWithLeadingZero = ("0" + dateTime.getMilliseconds()).substr(-3);

            $("#milliseconds").text(millisecondsTwoDigitsWithLeadingZero);
            $("#seconds").text(secondsTwoDigitsWithLeadingZero);
            $("#minutes").text(minutesTwoDigitsWithLeadingZero);
            $("#hours").text(dateTime.getHours());
        }
    }, (flag)?0:100);
});