const Sizes = ({selectedSizes, setSize}) =>  {

    const sizes = ['Grain', 'Multi-purpose','Fruits', 'Staple', 'Dairy'];

    return (
        <div className="sizes">
            <h3>Categories</h3>
            <div className="size-list">
                {
                    sizes.map((size, index) => {
                        return (
                            <button 
                                className={ "size" + (selectedSizes.includes(size) ? " selected-size" : "")}
                                key={index}
                                onClick={() => setSize(size)}
                            >
                                {size}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sizes;