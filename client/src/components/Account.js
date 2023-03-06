function Account({ user }) {
  return (
    <>
      <h2>Hi there, {user.firstname}!</h2>
      <div className="account-container">
        <p
          style={{
            fontWeight: "bold",
            fontSize: 20,
            marginTop: 0,
            textAlign: "center",
          }}
        >
          Account info
        </p>
        <hr
          style={{
            backgroundColor: "#3faae2",
            height: "1px",
            width: "60vw",
          }}
        />
        <table>
          <tbody>
            <tr>
              <td style={{ fontWeight: "bold" }}>Username</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td style={{ fontWeight: "bold" }}>Level</td>
              <td>{user.level}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Account;
