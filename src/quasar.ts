import './styles/quasar.styl';
import './styles/quasar.variables.styl';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/mdi-v3/mdi-v3.css';
import '@quasar/extras/roboto-font/roboto-font.css';

import {
  ClosePopup,
  Dialog,
  Notify,
  QAvatar,
  QBanner,
  QBar,
  QBtn,
  QBtnDropdown,
  QBtnGroup,
  QBtnToggle,
  QCard,
  QCardActions,
  QCardSection,
  QCarousel,
  QCarouselControl,
  QCarouselSlide,
  QCheckbox,
  QColor,
  QDate,
  QDialog,
  QDrawer,
  QExpansionItem,
  QField,
  QHeader,
  QIcon,
  QInnerLoading,
  QInput,
  QItem,
  QItemLabel,
  QItemSection,
  QLayout,
  QList,
  QMenu,
  QOptionGroup,
  QPage,
  QPageContainer,
  QRadio,
  QScrollArea,
  QSelect,
  QSeparator,
  QSlider,
  QSpace,
  QSpinner,
  QSplitter,
  QStep,
  QStepper,
  QStepperNavigation,
  QTab,
  QTabPanel,
  QTabPanels,
  QTabs,
  QTime,
  QToggle,
  QToolbar,
  QToolbarTitle,
  QTooltip,
  QTree,
  Quasar,
  Ripple,
  TouchHold,
  TouchPan,
} from 'quasar';
import Vue from 'vue';


Vue.use(Quasar, {
  components: {
    QAvatar,
    QBanner,
    QBar,
    QBtn,
    QBtnDropdown,
    QBtnGroup,
    QBtnToggle,
    QCard,
    QCardActions,
    QCardSection,
    QCarousel,
    QCarouselControl,
    QCarouselSlide,
    QCheckbox,
    QColor,
    QDate,
    QDialog,
    QExpansionItem,
    QField,
    QIcon,
    QInnerLoading,
    QInput,
    QItem,
    QItemLabel,
    QItemSection,
    QLayout,
    QDrawer,
    QHeader,
    QList,
    QMenu,
    QOptionGroup,
    QPage,
    QPageContainer,
    QRadio,
    QScrollArea,
    QSelect,
    QSeparator,
    QSlider,
    QSpace,
    QSpinner,
    QSplitter,
    QStep,
    QStepper,
    QStepperNavigation,
    QTab,
    QTabPanel,
    QTabPanels,
    QTabs,
    QTime,
    QToggle,
    QToolbar,
    QToolbarTitle,
    QTooltip,
    QTree,
  },
  directives: { Ripple, ClosePopup, TouchHold, TouchPan },
  plugins: { Notify, Dialog },
});
