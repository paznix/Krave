<NavLink to="/delivery">
  {({ isActive }) => (
    <div
      className="flex justify-between items-center"
      style={{ backgroundColor: isActive ? "white" : "back" }}
    >
      <img src={DeliveryImg} className="w-1/2" />
      <span className="font-bold text-lgreen text-xl">Delivery</span>
    </div>
  )}
</NavLink>
