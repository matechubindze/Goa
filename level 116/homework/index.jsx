return (
    <>
        <p>{userRole === "admin" ? "Admin Panel" : "User Dashboard"}</p>
        <p>{isAvailable ? product.price : "Out of stock"}</p>
        <img src={isDaytime ? "/sun.png" : "/moon.png"} />
        {hasNotification && <p>New Notification</p>}
        {email && <p>{email}</p>}
        {discount > 0 && <p>Discount Available!</p>}
    </>
);
