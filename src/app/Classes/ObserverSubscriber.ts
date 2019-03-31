export interface Observer {
    update();
}

export interface Subscriber {
    subscribe(observer: Observer);
    notify();
}