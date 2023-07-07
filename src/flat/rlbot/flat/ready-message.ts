// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';



/**
 * Sent when connecting to RLBot to indicate what type of messages are desired.
 * This could be sent by a bot, or a bot manager governing several bots, an
 * overlay, or any other utility that connects to the RLBot process.
 */
export class ReadyMessage {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ReadyMessage {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsReadyMessage(bb:flatbuffers.ByteBuffer, obj?:ReadyMessage):ReadyMessage {
  return (obj || new ReadyMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsReadyMessage(bb:flatbuffers.ByteBuffer, obj?:ReadyMessage):ReadyMessage {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ReadyMessage()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

wantsBallPredictions():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

wantsQuickChat():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

wantsGameMessages():boolean {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
}

static startReadyMessage(builder:flatbuffers.Builder) {
  builder.startObject(3);
}

static addWantsBallPredictions(builder:flatbuffers.Builder, wantsBallPredictions:boolean) {
  builder.addFieldInt8(0, +wantsBallPredictions, +false);
}

static addWantsQuickChat(builder:flatbuffers.Builder, wantsQuickChat:boolean) {
  builder.addFieldInt8(1, +wantsQuickChat, +false);
}

static addWantsGameMessages(builder:flatbuffers.Builder, wantsGameMessages:boolean) {
  builder.addFieldInt8(2, +wantsGameMessages, +false);
}

static endReadyMessage(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createReadyMessage(builder:flatbuffers.Builder, wantsBallPredictions:boolean, wantsQuickChat:boolean, wantsGameMessages:boolean):flatbuffers.Offset {
  ReadyMessage.startReadyMessage(builder);
  ReadyMessage.addWantsBallPredictions(builder, wantsBallPredictions);
  ReadyMessage.addWantsQuickChat(builder, wantsQuickChat);
  ReadyMessage.addWantsGameMessages(builder, wantsGameMessages);
  return ReadyMessage.endReadyMessage(builder);
}

unpack(): ReadyMessageT {
  return new ReadyMessageT(
    this.wantsBallPredictions(),
    this.wantsQuickChat(),
    this.wantsGameMessages()
  );
}


unpackTo(_o: ReadyMessageT): void {
  _o.wantsBallPredictions = this.wantsBallPredictions();
  _o.wantsQuickChat = this.wantsQuickChat();
  _o.wantsGameMessages = this.wantsGameMessages();
}
}

export class ReadyMessageT {
constructor(
  public wantsBallPredictions: boolean = false,
  public wantsQuickChat: boolean = false,
  public wantsGameMessages: boolean = false
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return ReadyMessage.createReadyMessage(builder,
    this.wantsBallPredictions,
    this.wantsQuickChat,
    this.wantsGameMessages
  );
}
}