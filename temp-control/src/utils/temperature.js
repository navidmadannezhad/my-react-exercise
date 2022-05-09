const colors = {
    under_50: "#5b7091",
    under_25: "#628ccd",
    under_10: "#72a9fd",
    neutral: "#e5e5e5",
    above_10: "#ffa589",
    above_25: "#ff7b51",
    above_50: "#ff5c27",
    above_100: "#ff3e00"
};

const temperature_color = temp_value => {
    switch(true){
        case temp_value < -50:
            return colors.under_50;
            break;
        case temp_value > -50 && temp_value < -25:
            return colors.under_25;
            break;
        case temp_value > -25 && temp_value < -10:
            return colors.under_10;
            break;
        case temp_value > -10 && temp_value < 10:
            return colors.neutral;
            break;
        case temp_value > 10 && temp_value < 25:
            return colors.above_10;
            break;
        case temp_value > 25 && temp_value < 50:
            return colors.above_25;
            break;
        case temp_value > 50 && temp_value < 100:
            return colors.above_50;
            break;
        default:
            return colors.above_100;
            break;
        
    }
}

export default temperature_color;