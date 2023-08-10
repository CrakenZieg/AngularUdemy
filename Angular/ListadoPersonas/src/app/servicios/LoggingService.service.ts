import { LoggingInterface } from './LoggingInterface';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggingServiceService implements LoggingInterface{
  constructor() {}

  logging(mensaje: string) {
    console.log(mensaje);
  }

/*
  Los servicios se introducen en los componentes mediante Dependency Injection.
  En el constructor introducimos como parametro las interfaces/clases que necesitamos
  y angular las instancia e inyecta

  Single responsibility:
    cada 'clase' deberia tener una sola 'responsabilidad'
    (no hagas monolitos)
  Open-closed:
    las clases deberian estar abiertas a la extension y cerradas a la modificacion
    (no modifiques el padre si podes heredar en una clase mas especifica)
  Liskov substitution:
    cualquier clase deberia poder ser reemplazada por una de sus herederas sin consecuencias
    (no sobreescibas metodos, hereda)
  Interface segregation:
    ninguna clase deberia depender de metodos que no usa, en otras palabras, cualquier
    interface debe cumplir un objetivo particular
    (mejor mas interfaces chicas que menos y mas grandes, cada interface deberia resolver un
    problem particular)
  Dependency inversion:
    las clases de alto nivel no deben depender de las clases de bajo nivel, ambas deben
    depender de abstracciones las abstracciones no deben depender de las implementaciones,
    las implementaciones deben depender de las abstracciones
    (Ej: un controlador que requiere un DAO y un encriptador deberia tener clases que
    implementen interfaces DAO y de encriptacion de manera que la implementacion de como
    accede a la DDBB o de que manera encripta le sean indiferentes, los detalles de la
    implementacion no deben afectar la arquitectura de la clase de alto nivel)

    Inversion de Dependencias viene de la mano de Inyeccion de Dependencias, en la cual una
    clase solo declara que interfaces necesita, quedando en el framework que corre el
    programa instanciar las clases que implementan las interfaces que la primer clase
    necesitaba, ademas permite cambiar implementaciones en tiempo de ejecucion
    => como pasa en Spring, que la factory inyecta las dependecias que vos @anotas
*/
}
