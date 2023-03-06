function Account({ user }) {
  return (
    <>
      <h2>Hi there, {user.firstname}!</h2>
      <div className="account-container">
        <p className="account-title">Account info</p>
        <hr className="account-line" />
        <table>
          <tbody>
            <tr>
              <td className="account-detail">Username</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td className="account-detail">Level</td>
              <td>{user.level}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Account;
