function Next({refresh, solved}) {
    return (
        <div className="d-grid col-12 p-1 mx-auto">
            <button className="btn btn-light" type="button"onClick={refresh} disabled={!solved}>Next</button>
        </div>
    )
}

export default Next;