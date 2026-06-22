importer configmanager depuis "../utils/configmanager.js"
importer fs depuis 'fs/promises'
importer le groupe depuis '../commands/group.js'
importer le bloc depuis '../commands/block.js'
import viewonce from '../commands/viewonce.js'
//importer kill depuis '../commands/kill.js'
importer tiktok depuis '../commands/tiktok.js'
importer play depuis '../commands/play.js'
importer sudo depuis '../commands/sudo.js'
importer tag depuis '../commands/tag.js'
import take from '../commands/take.js'
importer sticker depuis '../commands/sticker.js'
importer img depuis '../commands/img.js'
importer url depuis '../commands/url.js'
importer sender depuis '../commands/sender.js'
importer fuck depuis '../commands/fuck.js'
importer bug depuis '../commands/bug.js'
importer dlt depuis '../commands/dlt.js'
importer save depuis '../commands/save.js'
importer pp depuis '../commands/pp.js'
importer les primes depuis '../commands/premiums.js'
importer les réactions depuis '../commands/reactions.js'
importer les médias depuis '../commands/media.js'
importer set depuis '../commands/set.js'
import fancy from '../commands/fancy.js'
import react from "../utils/react.js"
importer les informations depuis "../commands/menu.js"
import { pingTest } from "../commands/ping.js"
importer auto depuis '../commands/auto.js'
importer uptime depuis '../commands/uptime.js'

fonction asynchrone handleIncomingMessage(client, événement) {
    let lid = client?.user?.lid.split(':')[0] + '@lid'
    const nombre = client.user.id.split(':')[0]
    const messages = event.messages
    const publicMode = configmanager.config.users[number].publicMode
    const prefix = configmanager.config.users[number].prefix

    pour (const message de messages) {
        const messageBody = (message.message?.extendedTextMessage?.text ||
                           message.message?.conversation || '').toLowerCase()
        const remoteJid = message.key.remoteJid
        const approvedUsers = configmanager.config.users[number].sudoList

        si (!messageBody || !remoteJid) continuer

        console.log('ðŸ“¨ Message:', messageBody.substring(0, 50))
        
        auto.autotype(client, message)
        auto.autorecord(client, message)
        tag.respond(client, message)

        réactions.auto(
            client,
            message,
            configmanager.config.users[numéro].autoreact,
            configmanager.config.users[number].emoji
        )

        si (messageBody.startsWith(prefix) &&
            (publicMode ||
             message.key.fromMe ||
             approvedUsers.includes(message.key.participant || message.key.remoteJid) ||
             lid.includes(message.key.participant || message.key.remoteJid))) {

            const commandAndArgs = messageBody.slice(prefix.length).trim()
            const parts = commandAndArgs.split(/\s+/)
            const commande = parties[0]

            interrupteur (commande) {
                cas 'uptime': // @cat: utilitaires
                    attendre react(client, message)
                    attendre la disponibilité(client, message)
                    casser

                cas 'ping': // @cat: utilitaires
                    attendre react(client, message)
                    attendre pingTest(client, message)
                    casser

                cas 'menu': // @cat: utilitaires
                    attendre react(client, message)
                    attendre info(client, message)
                    casser

                cas 'fancy': // @cat: utilitaires
                    attendre react(client, message)
                    attendre fancy(client, message)
                    casser

                cas 'setpp': // @cat: utilitaires
                    attendre react(client, message)
                    attendre pp.setpp(client, message)
                    casser

                cas 'getpp': // @cat: utilitaires
                    attendre react(client, message)
                    attendre pp.getpp(client, message)
                    casser

                cas 'sudo': // @cat: propriétaire
                    attendre react(client, message)
                    attendre sudo.sudo(client, message, utilisateurs approuvés)
                    configmanager.save()
                    casser

                cas 'delsudo': // @cat: propriétaire
                    attendre react(client, message)
                    attendre sudo.delsudo(client, message, utilisateurs approuvés)
                    configmanager.save()
                    casser

                cas 'public': // @cat: paramètres
                    attendre react(client, message)
                    attendre set.isPublic(message, client)
                    casser

                cas 'setprefix': // @cat: paramètres
                    attendre react(client, message)
                    attendre set.setprefix(message, client)
                    casser

                cas 'autotype': // @cat: paramètres
                    attendre react(client, message)
                    attendre set.setautotype(message, client)
                    casser

                cas 'autorecord': // @cat: paramètres
                    attendre react(client, message)
                    attendre set.setautorecord(message, client)
                    casser

                cas 'bienvenue': // @cat: paramètres
                    attendre react(client, message)
                    attendre set.setwelcome(message, client)
                    casser

                cas 'photo': // @cat: média
                    attendre react(client, message)
                    attendre media.photo(client, message)
                    casser

                cas 'toaudio': // @cat: média
                    attendre react(client, message)
                    attendre media.tomp3(client, message)
                    casser

                cas 'autocollant': // @cat: média
                    attendre react(client, message)
                    attendre l'autocollant(client, message)
                    casser

                cas 'play': // @cat: média
                    attendre react(client, message)
                    attendre play(message, client)
                    casser

                cas 'img': // @cat: média
                    attendre react(client, message)
                    attendre img(message, client)
                    casser

                cas 'vv': // @cat: média
                    attendre react(client, message)
                    attendre viewonce(client, message)
                    casser

                cas 'save': // @cat: média
                    attendre react(client, message)
                    attendre l'enregistrement(client, message)
                    casser

                cas 'tiktok': // @cat: média
                    attendre react(client, message)
                    attendre tiktok(client, message)
                    casser

                cas 'url': // @cat: média
                    attendre react(client, message)
                    attendre url(client, message)
                    casser

                cas 'tag': // @cat: groupe
                    attendre react(client, message)
                    attendre tag.tag(client, message)
                    casser

                cas 'tagall': // @cat: groupe
                    attendre react(client, message)
                    attendre tag.tagall(client, message)
                    casser

                cas 'tagadmin': // @cat: groupe
                    attendre react(client, message)
                    attendre tag.tagadmin(client, message)
                    casser

                cas 'kick': // @cat: groupe
                    attendre react(client, message)
                    attendre group.kick(client, message)
                    casser

                cas 'kickall': // @cat: groupe
                    attendre react(client, message)
                    attendre group.kickall(client, message)
                    casser

                cas 'kickall2': // @cat: groupe
                    attendre react(client, message)
                    attendre group.kickall2(client, message)
                    casser

                cas 'promouvoir': // @cat: groupe
                    attendre react(client, message)
                    attendre group.promote(client, message)
                    casser

                cas 'démote': // @cat: groupe
                    attendre react(client, message)
                    attendre group.demote(client, message)
                    casser

                cas 'promoteall': // @cat: groupe
                    attendre react(client, message)
                    attendre group.pall(client, message)
                    casser

                cas 'demoteall': // @cat: groupe
                    attendre react(client, message)
                    attendre group.dall(client, message)
                    casser

                cas 'mute': // @cat: groupe
                    attendre react(client, message)
                    attendre group.mute(client, message)
                    casser

                cas 'unmute': // @cat: groupe
                    attendre react(client, message)
                    attendre group.unmute(client, message)
                    casser

                cas 'gclink': // @cat: groupe
                    attendre react(client, message)
                    attendre group.gclink(client, message)
                    casser

                cas 'antilink': // @cat: groupe
                    attendre react(client, message)
                    attendre group.antilink(client, message)
                    casser

                cas 'bye': // @cat: groupe
                    attendre react(client, message)
                    attendre group.bye(client, message)
                    casser

                cas 'block': // @cat: modération
                    attendre react(client, message)
                    attendre block.block(client, message)
                    casser

                cas 'débloquer': // @cat: modération
                    attendre react(client, message)
                    attendre block.unblock(client, message)
                    casser

                cas 'close': // @cat: bug
                    attendre react(client, message)
                    attendre hell(client, message)
                    casser

               // cas 'kill': // @cat: bug
                  // attendre react(client, message)
                  // attendre kill(client, message)
                  // casser

                cas 'fuck': // @cat: bug
                    attendre react(client, message)
                    attendre fuck(client, message)
                    casser

                cas 'addprem': // @cat: premium
    attendre react(client, message);
    attendre premiums.addprem(client, message);
    configmanager.saveP();
    casser;

cas 'delprem': // @cat: premium
    attendre react(client, message);
    attendre premiums.delprem(client, message);
    configmanager.saveP();
    casser;

                cas 'test': // @cat: créateur
                    attendre react(client, message)
                    casser

                cas 'join': // @cat: groupe
                    attendre react(client, message)
                    attendre group.setJoin(client, message)
                    casser

                cas 'auto-promote': // @cat: premium
                    attendre react(client, message)
                    si (premium.includes(number + "@s.whatsapp.net")) {
                        attendre group.autoPromote (client, message)
                    } autre {
                        await bug(client, message, "commande réservée aux utilisateurs premium.", 3)
                    }
                    casser

                cas 'auto-démolition': // @cat: premium
                    attendre react(client, message)
                    si (premium.includes(number + "@s.whatsapp.net")) {
                        attendre group.autoDemote(client, message)
                    } autre {
                        await bug(client, message, "commande réservée aux utilisateurs premium.", 3)
                    }
                    casser

                cas 'auto-gauche': // @cat: premium
                    attendre react(client, message)
                    si (premium.includes(number + "@s.whatsapp.net")) {
                        attendre group.autoLeft(client, message)
                    } autre {
                        await bug(client, message, "commande réservée aux utilisateurs premium.", 3)
                    }
                    casser
            }
        }

        attendre group.linkDetection(client, message)
    }
}

exporter par défaut gérerMessageEntrant