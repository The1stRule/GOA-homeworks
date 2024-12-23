const ProfileCard = ({profile}) => {
    const {name, age, occupation} = profile;

    const profileCardStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: 'aqua',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }

    return (
        <div style={profileCardStyle}>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
        </div>
    );
}

export default ProfileCard;