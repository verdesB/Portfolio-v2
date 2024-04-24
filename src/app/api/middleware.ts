import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['fr-FR', 'en-US', 'en']
let defaultLocale = 'fr-FR'

match(languages, locales, defaultLocale) // -> 'en-US'git add  .