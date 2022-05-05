import Message from '@/components/Data/Message/Message';

export default class TextMessage extends Message {
    // id : 날짜부터 밀리세컨드까지 ( ex> 20220504103030000 )
    constructor( id, value ){
        this.id = id;
        this.value = value;
    };
};