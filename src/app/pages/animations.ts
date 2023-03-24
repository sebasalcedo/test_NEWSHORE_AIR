import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
 [trigger('routeAnimations', [
    transition('HomePage <=> AboutPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> FilterPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ])]

export const animationSearch =[
    trigger('enterState', [
      state(
        'void',
        style({
          transform: ' translateX(-100%)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          1000,
          style({
            transform: ' translateX(0)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ]

export const animationList =[
  trigger('enterState', [
    state(
      'void',
      style({
        transform: ' translateX(100%)',
        opacity: 0,
      })
    ),
    transition(':enter', [
      animate(
        1000,
        style({
          transform: ' translateX(0)',
          opacity: 1,
        })
      ),
    ]),
  ]),



]
