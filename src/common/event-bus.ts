const EventBus = {
    on(event: string, callback: EventListener) {
        document.addEventListener(event, (e) => callback(e));
        console.log(`Event ${event} added`);
    },
    dispatch(event: string, data?: any) { 
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
        console.log(`Event ${event} dispatched`);
    },
    remove(event: string, callback: EventListener) {
        document.removeEventListener(event, (e) => callback(e));
        console.log(`Event ${event} removed`);
    }
}


export default EventBus;