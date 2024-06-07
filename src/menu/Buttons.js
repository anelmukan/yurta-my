function Buttons ({filteredCatalog}) {
    return (
        <div className="cont">
<button className="change" onClick={()=>filteredCatalog("гостинная")}>Гостинная</button>
<button className="change" onClick={()=>filteredCatalog("спальня")}>Спальня</button>
<button className="change" onClick={()=>filteredCatalog("кухня")}>Кухня</button>
<button className="change" onClick={()=>filteredCatalog("рабочая")}>Рабочая зона</button>
<button className="change" onClick={()=>filteredCatalog("балкон")}>Балкон</button>

        </div>
    )
}

export default Buttons;

