import Club from "../club/Club"

function TeamCard(props) {
    return (
        <a href={props.url}>
            <Club clubImage={props.image} />
        </a>
    )
}

export default TeamCard