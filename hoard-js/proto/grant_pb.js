/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_gogo_protobuf_gogoproto_gogo_pb = require('./github.com/gogo/protobuf/gogoproto/gogo_pb.js');
goog.exportSymbol('proto.grant.Grant', null, global);
goog.exportSymbol('proto.grant.OpenPGPSpec', null, global);
goog.exportSymbol('proto.grant.PlaintextSpec', null, global);
goog.exportSymbol('proto.grant.Spec', null, global);
goog.exportSymbol('proto.grant.SymmetricSpec', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grant.Grant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grant.Grant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grant.Grant.displayName = 'proto.grant.Grant';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grant.Grant.prototype.toObject = function(opt_includeInstance) {
  return proto.grant.Grant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grant.Grant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.Grant.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: (f = msg.getSpec()) && proto.grant.Spec.toObject(includeInstance, f),
    encryptedreferences: msg.getEncryptedreferences_asB64(),
    version: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grant.Grant}
 */
proto.grant.Grant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grant.Grant;
  return proto.grant.Grant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grant.Grant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grant.Grant}
 */
proto.grant.Grant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grant.Spec;
      reader.readMessage(value,proto.grant.Spec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEncryptedreferences(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grant.Grant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grant.Grant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grant.Grant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.Grant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grant.Spec.serializeBinaryToWriter
    );
  }
  f = message.getEncryptedreferences_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional Spec Spec = 1;
 * @return {?proto.grant.Spec}
 */
proto.grant.Grant.prototype.getSpec = function() {
  return /** @type{?proto.grant.Spec} */ (
    jspb.Message.getWrapperField(this, proto.grant.Spec, 1));
};


/** @param {?proto.grant.Spec|undefined} value */
proto.grant.Grant.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grant.Grant.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grant.Grant.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes EncryptedReferences = 2;
 * @return {!(string|Uint8Array)}
 */
proto.grant.Grant.prototype.getEncryptedreferences = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes EncryptedReferences = 2;
 * This is a type-conversion wrapper around `getEncryptedreferences()`
 * @return {string}
 */
proto.grant.Grant.prototype.getEncryptedreferences_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEncryptedreferences()));
};


/**
 * optional bytes EncryptedReferences = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEncryptedreferences()`
 * @return {!Uint8Array}
 */
proto.grant.Grant.prototype.getEncryptedreferences_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEncryptedreferences()));
};


/** @param {!(string|Uint8Array)} value */
proto.grant.Grant.prototype.setEncryptedreferences = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 Version = 3;
 * @return {number}
 */
proto.grant.Grant.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.grant.Grant.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grant.Spec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grant.Spec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grant.Spec.displayName = 'proto.grant.Spec';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grant.Spec.prototype.toObject = function(opt_includeInstance) {
  return proto.grant.Spec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grant.Spec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.Spec.toObject = function(includeInstance, msg) {
  var f, obj = {
    plaintext: (f = msg.getPlaintext()) && proto.grant.PlaintextSpec.toObject(includeInstance, f),
    symmetric: (f = msg.getSymmetric()) && proto.grant.SymmetricSpec.toObject(includeInstance, f),
    openpgp: (f = msg.getOpenpgp()) && proto.grant.OpenPGPSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grant.Spec}
 */
proto.grant.Spec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grant.Spec;
  return proto.grant.Spec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grant.Spec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grant.Spec}
 */
proto.grant.Spec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grant.PlaintextSpec;
      reader.readMessage(value,proto.grant.PlaintextSpec.deserializeBinaryFromReader);
      msg.setPlaintext(value);
      break;
    case 2:
      var value = new proto.grant.SymmetricSpec;
      reader.readMessage(value,proto.grant.SymmetricSpec.deserializeBinaryFromReader);
      msg.setSymmetric(value);
      break;
    case 3:
      var value = new proto.grant.OpenPGPSpec;
      reader.readMessage(value,proto.grant.OpenPGPSpec.deserializeBinaryFromReader);
      msg.setOpenpgp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grant.Spec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grant.Spec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grant.Spec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.Spec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaintext();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grant.PlaintextSpec.serializeBinaryToWriter
    );
  }
  f = message.getSymmetric();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.grant.SymmetricSpec.serializeBinaryToWriter
    );
  }
  f = message.getOpenpgp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.grant.OpenPGPSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional PlaintextSpec Plaintext = 1;
 * @return {?proto.grant.PlaintextSpec}
 */
proto.grant.Spec.prototype.getPlaintext = function() {
  return /** @type{?proto.grant.PlaintextSpec} */ (
    jspb.Message.getWrapperField(this, proto.grant.PlaintextSpec, 1));
};


/** @param {?proto.grant.PlaintextSpec|undefined} value */
proto.grant.Spec.prototype.setPlaintext = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grant.Spec.prototype.clearPlaintext = function() {
  this.setPlaintext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grant.Spec.prototype.hasPlaintext = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SymmetricSpec Symmetric = 2;
 * @return {?proto.grant.SymmetricSpec}
 */
proto.grant.Spec.prototype.getSymmetric = function() {
  return /** @type{?proto.grant.SymmetricSpec} */ (
    jspb.Message.getWrapperField(this, proto.grant.SymmetricSpec, 2));
};


/** @param {?proto.grant.SymmetricSpec|undefined} value */
proto.grant.Spec.prototype.setSymmetric = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.grant.Spec.prototype.clearSymmetric = function() {
  this.setSymmetric(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grant.Spec.prototype.hasSymmetric = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional OpenPGPSpec OpenPGP = 3;
 * @return {?proto.grant.OpenPGPSpec}
 */
proto.grant.Spec.prototype.getOpenpgp = function() {
  return /** @type{?proto.grant.OpenPGPSpec} */ (
    jspb.Message.getWrapperField(this, proto.grant.OpenPGPSpec, 3));
};


/** @param {?proto.grant.OpenPGPSpec|undefined} value */
proto.grant.Spec.prototype.setOpenpgp = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.grant.Spec.prototype.clearOpenpgp = function() {
  this.setOpenpgp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grant.Spec.prototype.hasOpenpgp = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grant.PlaintextSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grant.PlaintextSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grant.PlaintextSpec.displayName = 'proto.grant.PlaintextSpec';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grant.PlaintextSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.grant.PlaintextSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grant.PlaintextSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.PlaintextSpec.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grant.PlaintextSpec}
 */
proto.grant.PlaintextSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grant.PlaintextSpec;
  return proto.grant.PlaintextSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grant.PlaintextSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grant.PlaintextSpec}
 */
proto.grant.PlaintextSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grant.PlaintextSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grant.PlaintextSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grant.PlaintextSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.PlaintextSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grant.SymmetricSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grant.SymmetricSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grant.SymmetricSpec.displayName = 'proto.grant.SymmetricSpec';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grant.SymmetricSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.grant.SymmetricSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grant.SymmetricSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.SymmetricSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grant.SymmetricSpec}
 */
proto.grant.SymmetricSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grant.SymmetricSpec;
  return proto.grant.SymmetricSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grant.SymmetricSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grant.SymmetricSpec}
 */
proto.grant.SymmetricSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grant.SymmetricSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grant.SymmetricSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grant.SymmetricSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.SymmetricSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string PublicID = 1;
 * @return {string}
 */
proto.grant.SymmetricSpec.prototype.getPublicid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.grant.SymmetricSpec.prototype.setPublicid = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grant.OpenPGPSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grant.OpenPGPSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grant.OpenPGPSpec.displayName = 'proto.grant.OpenPGPSpec';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grant.OpenPGPSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.grant.OpenPGPSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grant.OpenPGPSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.OpenPGPSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    publickey: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grant.OpenPGPSpec}
 */
proto.grant.OpenPGPSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grant.OpenPGPSpec;
  return proto.grant.OpenPGPSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grant.OpenPGPSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grant.OpenPGPSpec}
 */
proto.grant.OpenPGPSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublickey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grant.OpenPGPSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grant.OpenPGPSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grant.OpenPGPSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.grant.OpenPGPSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublickey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string PublicKey = 1;
 * @return {string}
 */
proto.grant.OpenPGPSpec.prototype.getPublickey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.grant.OpenPGPSpec.prototype.setPublickey = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, proto.grant);
