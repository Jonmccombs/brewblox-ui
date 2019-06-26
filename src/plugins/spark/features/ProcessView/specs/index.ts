import { ComponentSpec } from '../types';
import ActuatorValve from './ActuatorValve';
import BridgeTube from './BridgeTube';
import CheckValve from './CheckValve';
import Coil from './Coil';
import CounterflowChiller from './CounterflowChiller';
import CrossTube from './CrossTube';
import DipTube from './DipTube';
import ElbowTube from './ElbowTube';
import HeatingElement from './HeatingElement';
import ImmersionCoil from './ImmersionCoil';
import Kettle from './Kettle';
import LargeKettle from './LargeKettle';
import Lauterhexe from './Lauterhexe';
import PidDisplay from './PidDisplay';
import Pump from './Pump';
import PwmDisplay from './PwmDisplay';
import SensorDisplay from './SensorDisplay';
import SetpointDisplay from './SetpointDisplay';
import SmallKettle from './SmallKettle';
import StraightInletTube from './StraightInletTube';
import StraightTube from './StraightTube';
import SystemIO from './SystemIO';
import TallFridge from './TallFridge';
import TeeTube from './TeeTube';
import Valve from './Valve';
import WhirlpoolInlet from './WhirlpoolInlet';

const specs: { [key: string]: ComponentSpec } = {
  ActuatorValve,
  BridgeTube,
  CheckValve,
  Coil,
  CounterflowChiller,
  CrossTube,
  DipTube,
  ElbowTube,
  HeatingElement,
  ImmersionCoil,
  Kettle,
  LargeKettle,
  Lauterhexe,
  PidDisplay,
  Pump,
  PwmDisplay,
  SensorDisplay,
  SetpointDisplay,
  SmallKettle,
  StraightInletTube,
  StraightTube,
  SystemIO,
  TallFridge,
  TeeTube,
  Valve,
  WhirlpoolInlet,
};

export default specs;
