/**
 * Attributs de tracking Umami.
 *
 * Deux événements seulement : `booking_click` (ouverture de la réservation
 * Doctolib) et `phone_click` (lien tel:). L'emplacement du CTA est porté par
 * la propriété `location`, jamais par le nom de l'événement.
 *
 * Aucune donnée personnelle ou médicale n'est transmise.
 */

export type TrackLocation =
  | 'hero'
  | 'nav'
  | 'profile'
  | 'motifs'
  | 'approach'
  | 'infos'
  | 'footer'
  | 'emergency'
  | 'mutuelle'

export function bookingTrack(location: TrackLocation): Record<string, string> {
  return {
    'data-umami-event': 'booking_click',
    'data-umami-event-site': 'osteo',
    'data-umami-event-provider': 'doctolib',
    'data-umami-event-location': location,
  }
}

export function phoneTrack(location: TrackLocation, context?: 'emergency'): Record<string, string> {
  return {
    'data-umami-event': 'phone_click',
    'data-umami-event-site': 'osteo',
    'data-umami-event-location': location,
    ...(context ? { 'data-umami-event-context': context } : {}),
  }
}
