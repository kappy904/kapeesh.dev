import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations'

export const fadeInAnimation =
	trigger('routeAnimations', [
		transition('* <=> Fade', [
			style({ position: 'relative' }),
			query(':enter, :leave', [
				style({
					position: 'absolute',
					width: '100%'
				})
			]),
			query(':enter', [
				style({ opacity:0 })
			]),
			query(':leave', animateChild()),
			group([
				query(':leave', [
					animate('300ms ease-out', style({ opacity:0 }))
				]),
				query(':enter', [
					animate('300ms ease-out', style({ opacity:1 }))
				])
			]),
			query(':enter', animateChild())
		])
	])

