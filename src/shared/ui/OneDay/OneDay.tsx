
interface IOneDayProps {
    dataTooltipId: string;
    dataTooltipContent: string;
    value: number;
}

export const OneDay = (props :IOneDayProps) => {
    const {
        dataTooltipContent,
        dataTooltipId,
        value
    } = props
    let backgroundColor: string;

    if (value >= 30) {
        backgroundColor = "rgb(37,78,119)";
    } else if (value >= 20) {
        backgroundColor = "rgb(82,123,160)";
    } else if (value >= 10) {
        backgroundColor = "rgb(126,168,201)";
    } else if (value >= 1) {
        backgroundColor = "rgb(172,213,242)";
    } else {
        backgroundColor = "rgb(237,237,237)";
    }

    return (
        <span
            data-tooltip-id={dataTooltipId}
            data-tooltip-content={dataTooltipContent}
            style={{
                backgroundColor:`${backgroundColor}`,
                padding: '1px',
                width: '15px',
                height: '15px',
                display: 'inline-block'
            }}
        />
    );
};



