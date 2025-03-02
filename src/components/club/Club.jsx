import './Club.css'

function Club({ clubImage }) {
    return (
        <>
            <div className="club">
                <img src={clubImage} alt="" className="club-image" />
                
            </div>

        </>
    )
}

export default Club