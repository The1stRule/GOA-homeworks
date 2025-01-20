import ProfileCard from './ProfileCard';

const ProfileList = ({profiles}) => {
    return (
        <>
            {
                profiles.map((curValue, index) => {
                    return <ProfileCard 
                            key={`profile-${index}`} 
                            profile = {curValue} />;
                })
            }
        </>
    );
}

export default ProfileList;