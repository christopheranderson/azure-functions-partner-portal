
class Context {
    public bindings: any;
    public bindingData: any;
    public invocationId: any;

    private isDone: boolean = false;

    log(data) {
        console.log(data);
    }

    done(err, results?) {
        if(this.isDone) {
            return;
        } else if(err) {
            console.log('Function failed');
            console.log(err);
        } else {
            console.log('Function completed');
            console.log(results);
        }
    }
}

export { Context }