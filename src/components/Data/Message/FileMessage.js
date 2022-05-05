import Message from '@/components/Data/Message/Message';

export default class FileMessage extends Message {
    constructor( id, value ){
        this.id = id;
        this.value = value;
    };
};