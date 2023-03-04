function Account({ user }) {
  return (
    <div className="account">
      Hi there {user.firstname}! Account info: Username: {user.username}
      Level: {user.level}
    </div>
  );
}

export default Account;
