const slicedText = (text) => {
    const sliced = text.substring(0, 7) + "..........." + text.slice(-4)
    return sliced;
}

export default slicedText