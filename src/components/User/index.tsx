export interface UserProps {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  picture: {
    large: string;
  };
}

const User = ({ name, email, phone, picture }: UserProps) => {
  return (
    <div className="user-card">
      <img src={picture.large} alt={name.first + ' ' + name.last} />
      <h2>{name.first} {name.last}</h2>
      <p><span>Email:</span> {email}</p>
      <p><span>Telefone:</span> {phone}</p>
    </div>
  )
}

export default User