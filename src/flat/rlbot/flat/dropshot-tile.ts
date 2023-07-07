// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { TileState } from '../../rlbot/flat/tile-state';


export class DropshotTile {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):DropshotTile {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsDropshotTile(bb:flatbuffers.ByteBuffer, obj?:DropshotTile):DropshotTile {
  return (obj || new DropshotTile()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsDropshotTile(bb:flatbuffers.ByteBuffer, obj?:DropshotTile):DropshotTile {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new DropshotTile()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * The amount of damage the tile has sustained.
 */
tileState():TileState {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : TileState.Unknown;
}

static startDropshotTile(builder:flatbuffers.Builder) {
  builder.startObject(1);
}

static addTileState(builder:flatbuffers.Builder, tileState:TileState) {
  builder.addFieldInt8(0, tileState, TileState.Unknown);
}

static endDropshotTile(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createDropshotTile(builder:flatbuffers.Builder, tileState:TileState):flatbuffers.Offset {
  DropshotTile.startDropshotTile(builder);
  DropshotTile.addTileState(builder, tileState);
  return DropshotTile.endDropshotTile(builder);
}

unpack(): DropshotTileT {
  return new DropshotTileT(
    this.tileState()
  );
}


unpackTo(_o: DropshotTileT): void {
  _o.tileState = this.tileState();
}
}

export class DropshotTileT {
constructor(
  public tileState: TileState = TileState.Unknown
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  return DropshotTile.createDropshotTile(builder,
    this.tileState
  );
}
}