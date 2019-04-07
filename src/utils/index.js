const DATE_OPTIONS = {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
}

export const dateToViewDate = date => date.toLocaleDateString('es-MX', DATE_OPTIONS)
