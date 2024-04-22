const slicedText = (text) => {
    const sliced = text.length >= 12 ? text.substring(0, 13) + "..........." + text.slice(-4) : text
    return sliced;
}

export default slicedText