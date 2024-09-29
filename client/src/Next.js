function Next({refresh, solved}) {
    return (
        <div>
            <button onClick={refresh} disabled={!solved}>Next</button>
        </div>
    )
}

export default Next;