function ItemFilter({updateFilter, filter}) {
    const buttons = [
        {
            label: "all",
          },
          {
            label: "active",
          },
          {
            label: "done",
          },
    ]
    
    return (
        buttons.map((item, index) => {
            const style = item.label === filter ? 'btn btn-dark' : 'btn btn-outline-dark'

            return (
                <button 
                    className={style}
                    key={index}
                    onClick={() => updateFilter(item.label)}
                >
                    {item.label}
                </button>
            )
        }
    )
)}

export default ItemFilter