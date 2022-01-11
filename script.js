function getGrade(s1, s2, s3) {
    let sum = (s1 + s2 + s3) / 3;
    return 90 <= sum && sum <= 100 ? "A"
        : 80 <= sum && sum < 90 ? "B"
            : 70 <= sum && sum < 80 ? "C"
                : 60 <= sum && sum < 70 ? "D"
                    : "F";
}
