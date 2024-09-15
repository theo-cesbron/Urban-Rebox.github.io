
export default function Avatar({ name, role, profil_icon }) {
    return (
        <div className="column col--6 authorCol center_item">
            <div className="avatar margin-bottom--sm">
                <img className="avatar__photo author_image avatar__photo-link"
                    src={profil_icon}
                    alt={name} />
                <div
                    className="avatar__intro author_details">
                    <div className="avatar__name">
                        <span
                            className="author_name">{name}
                        </span>
                    </div>
                    <small
                        className="author_title"
                        title={role}>{role}
                    </small>
                </div>
            </div>
        </div>
    );
}