input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RingbitCar.freestyle(0, 0)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 364)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 125)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 640)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 165)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 110)
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
