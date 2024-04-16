import {createTranslationRef, createTranslationResource} from '@backstage/core-plugin-api/alpha';

export const pluginRiScTranslationRef = createTranslationRef({
  id: 'plugin.ros',
  messages: {
    contentHeader: {
      title: 'Risk score card',
      createNewButton: 'Create new score card',
    },
    dictionary: {
      cancel: 'Cancel',
      close: 'Close',
      confirm: 'Confirm',
      consequence: 'Consequence', // Severity, Impact, Effect or Consequence
      deadline: 'Deadline', // Deadline or Due date
      delete: 'Delete',
      description: 'Description',
      discardChanges: 'Discard changes',
      edit: 'Edit',
      estimatedRisk: 'Estimated risk', 
      initialRisk: 'Initial risk', // TODO Starting or Initial risk
      measure: 'Initiative', // Measure, Action or Initiative
      measureOwner: 'Responsible', // Responsible? Measure owner? Initiative owner?
      probability: 'Probability', // Likelihood or Probability
      restRisk: 'Remaining risk', // TODO Residual or Remaining risk
      risk: 'Risk',
      save: 'Save',
      scope: 'Scope',
      status: 'Status',
      threatActors: 'Threat actors',
      title: 'Title',
      vulnerabilities: 'Vulnerabilities',
    },
    rosStatus: {
      statusBadge: {
        // Approve/Approval eller Accept/Acceptance?? (Approval brukes i Github så kanskje fint å skille)
        missing: 'Needs acceptance from risk owner', // Mangler godkjenning av risikoeier
        approved: 'Accepted by risk owner', // Godkjent av risikoeier
        error: 'Failed to retrieve status', // Kunne ikke hente status
      },
      prStatus: 'Pending PR approval in Github ', // Avventer godkjenning av PR i Github
      approveButton: 'Accept risks', // Godkjenn ROS
    },
    publishDialog: {
      title: 'Accept risks', // Godkjenn ROS
      checkboxLabel:
        'I confirm that I am the risk owner and accept the risks detailed in this risk score card.',
      // Jeg bekrefter at jeg er risikoeier og godtar risikoen i denne risiko- og sårbarhetsanalysen.
    },
    scenarioTable: {
      title: 'Risk scenarios',
      addScenarioButton: 'Add scenario',
      columns: {
        measuresCount: 'No. of initiatives',
        consequenceChar: 'C',
        probabilityChar: 'P',
        completed: 'completed',
      },
    },
    riskMatrix: {
      title: 'Risk matrix', // Risk matrix or Risk overview
      estimatedRisk: {
        title: 'Estimated risk',
        suffix: {
          thousand: '{{count}} thousand',
          million_one: '{{count}} million',
          million_other: '{{count}} million',
          billion_one: '{{count}} billion',
          billion_other: '{{count}} billion',
          trillion_one: '{{count}} trillion',
          trillion_other: '{{count}} trillion',
        },
        unit: {
          nokPerYear: 'NOK/year',
        },
      },
      tooltip: {
        title: 'Risk scenarios',
      },
    },
    infoDialog: {
      title: 'Estimated risk',
      description:
        'The estimated risk is a calculation based on the risks the different scenarios pose. If there is a high probability that a serious consequence will occur, this could potentially become a large cost for the organization. In other words, the cost is an attempt to concretize the risk value and is the sum of the estimated risk for all the risk scenarios in this risk score card.',
      calculatedHowTitle: 'How do we calculate the estimated risk?',
      calculatedHow:
        'Consequence is measured in kroner (NOK) per incident and probability is measured in incidents per year. ' +
        'The estimated risk is defined by C x P.',
      consequenceTitle: 'Consequence (NOK/incident)', // TODO incident, event or occurrence
      probabilityTitle: 'Probability (incidents/year)',
      probabilityDescription: {
        '0': 'every 100 years', // TODO 100 year intervals
        '1': 'every 10 years', // TODO 10 year intervals
        '2': 'yearly', // almost yearly?
        '3': 'weekly',
        '4': 'daily',
      },
      example:
        'A scenario with consequence 2 and probability 4 has an estimated risk of ' +
        '30 000 NOK/incident x 50 incidents/year = 1 500 000 NOK/year.',
    },
    rosDialog: {
      titleNew: 'New risk score card', // Ny risiko- og sårbarhetsanalyse
      titleEdit: 'Edit risk score card', // Rediger ROS-analyse
      titleError: 'The score card has to have a title', 
      scopeDescription:
        'Describe what the risk analysis will assess. Specify any key areas which are not part of the scope.',
      scopeError: 'The score card has to have a description of the scope', 
    },
    scenarioDrawer: {
      title: 'Risk scenario',
      subtitle: 'An unwanted incident that could potentially harm the system.', // harm or affect?
      threatActorSubtitle:
        'Someone who attempts to access or abuse the system',
      vulnerabilitySubtitle:
        'Weakness in the system that the threat actor can exploit',
      consequenceTab: {
        subtitle:
          'How severe is the potential impact? ' + 
          'If the scenario can impact more than one category, choose the highest level of consequence.',
      },
      probabilityTab: {
        subtitle:
          'How likely is it that this scenario will occur? ' +
          'If you are between two probability values, choose the higher one.',
      },
      measureTab: {
        subtitle:
          'What actions should be taken to avoid the scenario?',
        measureOwnerDescription:
          'Decide who will be responsible for completing the initiative',
        addMeasureButton: 'Add initiative',
        plannedMeasures: 'Planned initiatives',
        existingMeasure: 'Existing initiatives',
        existingMeasureSubtitle: 'Brief description of relevant actions that have already been implemented',
      },
      restRiskTab: {
        subtitle:
          'Define the remaining risk for the scenario. Remaining risk is the consequence and probability for this ' +
          'scenario after all initiatives have been completed.',
      },
      deleteScenarioButton: 'Delete scenario',
      deleteScenarioConfirmation: 'Are you sure you want to delete this scenario?',
      closeConfirmation: 'Do you want to save your changes?',
    },
    consequenceTable: {
      rows: {
        '1': 'Insignificant', // Insignificant, negligible (ubetydelig)
        '2': 'Small', // Liten
        '3': 'Moderate', 
        '4': 'Severe', // Alvorlig
        '5': 'Critical',
      },
      columns: {
        health: 'Life and health', // Health and safety, Life and limb, Health and lives (Liv og helse)
        economical: 'Financial', // Financial consequences, economic implications
        privacy: 'Privacy', // Personvern
        reputation: 'Reputation and trust', // Reputation and trust, confidence, faith (Omdømme og tillit)
      },
      cells: {
        health: {
          '1': 'Impact on life and health cannot be rated less severe than 3', // Liv og helse kan ikke være mindre alvorlig enn 3
          '2': 'Impact on life and health cannot be rated less severe than 3',
          '3': 'Temporary or less severe health implications', // implications, effects or consequence? Midlertidig eller mindre alvorlige helsemessige konsekvenser
          '4': 'Permanent or severe health implications', // implications, effects or consequence? Lasting or Permanent? Varige eller alvorlige helsemessige konsekvenser
          '5': 'Death or permanent severe health implications', // implications, effects or consequence? Lasting or permanent? Død eller varige alvorlige helsemssige konsekvenser
        },
        economical: {
          '1': 'Temporary minor financial loss', // TODO: Hvor kort er forbigående? Forbigående mindre økonomisk tap
          '2': 'Temporary financial loss', // Forbigående økonomisk tap
          '3': 'Financial loss of some duration', // Økonomisk tap av noe varighet
          '4': 'Financial loss of considerable duration for the organization and any third parties', // Økonomisk tap av betydelig varighet for Kartverket og evt. tredjeparter
          '5': 'Permanent and severe financial loss', // Varig og alvorlig økonomisk tap
        },
        privacy: {
          '1': 'The right to privacy is violated for a very short period and does not involve sensitive categories or vulnerable groups', //særlige kategorier = sensitive kategorier? special/particular/sensitive categories
          '2': 'The right to privacy is violated for a longer period and involves sensitive categories or vulnerable groups',
          '3': 'The right to privacy is severely violated for a longer period and involves sensitive categories or vulnerable groups',
          '4': 'The right to privacy is being violated in a very serious manner', // very severely violated?
          '5': 'Impact on privacy cannot be rated more severe than 4',
        },
        reputation: {
          '1': 'Temporary loss of reputation and little impact on trust',
          '2': 'Negative attention in national media that can reduce trust', // TODO saker = articles, news, items, publicity, mentions, attention
          '3': 'Lasting negative attention in national and international media that can reduce trust',
          '4': 'Impact on reputation and trust cannot be rated more severe than 3',
          '5': 'Impact on reputation and trust cannot be rated more severe than 3',
        },
      },
    },
    probabilityTable: {
      rows: {
        '1': 'Very low', // svært liten
        '2': 'Low', // liten
        '3': 'Moderat', // moderat 
        '4': 'High', // stor
        '5': 'Very high', // svært stor
      },
      cells: {
        '1': 'The scenario is unlikely to occur. It occurs less often than every 100 years',
        '2': 'The scenario is unlikely to occur. It can occur every 10 years',
        '3': 'The scenario can occur. It can occur almost every year',
        '4': 'The scenario will very likely occur. It can occur almost weekly',
        '5': 'The scenario is almost guaranteed to occur. It can occur almost daily',
      },
    },
  },
});

export const pluginRiScNorwegianTranslation = createTranslationResource({
  ref: pluginRiScTranslationRef,
  translations: {
    no: () =>
      Promise.resolve({
        default: {
          'contentHeader.title': 'Risiko- og sårbarhetsanalyse',
          'contentHeader.createNewButton': 'Opprett ny analyse',
          'dictionary.cancel': 'Avbryt',
          'dictionary.close': 'Lukk',
          'dictionary.confirm': 'Bekreft',
          'dictionary.consequence': 'Konsekvens',
          'dictionary.deadline': 'Frist',
          'dictionary.delete': 'Slett',
          'dictionary.description': 'Beskrivelse',
          'dictionary.discardChanges': 'Forkast endringer',
          'dictionary.edit': 'Rediger',
          'dictionary.estimatedRisk': 'Estimert risiko',
          'dictionary.initialRisk': 'Startrisiko',
          'dictionary.measure': 'Tiltak',
          'dictionary.measureOwner': 'Tiltakseier',
          'dictionary.probability': 'Sannsynlighet',
          'dictionary.restRisk': 'Restrisiko',
          'dictionary.risk': 'Risiko',
          'dictionary.save': 'Lagre',
          'dictionary.scope': 'Omfang',
          'dictionary.status': 'Status',
          'dictionary.threatActors': 'Trusselaktører',
          'dictionary.title': 'Tittel',
          'dictionary.vulnerabilities': 'Sårbarheter',
          'rosStatus.statusBadge.missing': 'Mangler godkjenning',
          'rosStatus.statusBadge.approved': 'Godkjent av risikoeier',
          'rosStatus.statusBadge.error': 'Kunne ikke hente status',
          'rosStatus.prStatus': 'Avventer godkjenning av PR i Github',
          'rosStatus.approveButton': 'Godkjenn ROS',
          'publishDialog.title': 'Godkjenn ROS-analyse',
          'publishDialog.checkboxLabel': 'Jeg bekrefter at jeg er risikoeier og godtar risikoen beskrevet i denne risiko- og sårbarhetsanalysen.',
          'scenarioTable.title': 'Risikoscenarioer',
          'scenarioTable.addScenarioButton': 'Legg til scenario',
          'scenarioTable.columns.measuresCount': 'Antall tiltak',
          'scenarioTable.columns.consequenceChar': 'K',
          'scenarioTable.columns.probabilityChar': 'S',
          'scenarioTable.columns.completed': 'fullførte',
          'riskMatrix.title': 'Risikomatrise',
          'riskMatrix.estimatedRisk.title': 'Estimert risiko',
          'riskMatrix.estimatedRisk.suffix.thousand': '{{count}} tusen',
          'riskMatrix.estimatedRisk.suffix.million_one': '{{count}} million',
          'riskMatrix.estimatedRisk.suffix.million_other': '{{count}} millioner',
          'riskMatrix.estimatedRisk.suffix.billion_one': '{{count}} milliard',
          'riskMatrix.estimatedRisk.suffix.billion_other': '{{count}} milliarder',
          'riskMatrix.estimatedRisk.suffix.trillion_one': '{{count}} billion',
          'riskMatrix.estimatedRisk.suffix.trillion_other': '{{count}} billioner',
          'riskMatrix.estimatedRisk.unit.nokPerYear': 'kr/år',
          'riskMatrix.tooltip.title': 'Risikoscenarioer',
          'infoDialog.title': 'Estimert risiko',
          'infoDialog.description': 'Den estimerte risikoen er basert på hvor stor risiko de forskjellige scenariene utgjør. Hvis det er stor sannsynlighet for at en alvorlig konsekvens skjer er det høy risiko for at det kan bli en stor kostnad for Kartverket. Kostnaden er med andre ord et forsøk på å konkretisere verdien av risiko og er summen av den estimerte risikoen for alle risikoscenariene i denne ROS-analysen.',
          'infoDialog.calculatedHowTitle': 'Hvordan regner vi ut estimert risiko?',
          'infoDialog.calculatedHow': 'Konsekvensen måles i kroner per hendelse og sannsynlighet måles i hendelser per år. Den estimerte risikoen blir da: K x S.',
          'infoDialog.consequenceTitle': 'Konsekvens (kr/hendelse)',
          'infoDialog.probabilityTitle': 'Sannsynlighet (hendelser/år)',
          'infoDialog.probabilityDescription.0': 'ca hvert 100. år',
          'infoDialog.probabilityDescription.1': 'ca hvert 10. år',
          'infoDialog.probabilityDescription.2': 'ca årlig',
          'infoDialog.probabilityDescription.3': 'ca ukentlig',
          'infoDialog.probabilityDescription.4': 'ca daglig',
          'infoDialog.example': 'Et risikoscenario med konsekvens 2 og sannsynlighet 4 har en estimert risiko på 30 000 kr/hendelse x 50 hendelser/år = 1 500 000 kr/år.',
          'rosDialog.titleNew': 'Ny risiko- og sårbarhetsanalyse',
          'rosDialog.titleEdit': 'Rediger tittel og omfang',
          'rosDialog.titleError': 'ROS-analysen må ha en tittel',
          'rosDialog.scopeDescription': 'Beskriv hva analysen skal vurdere. Hva som ikke inngår som en del av omfanget må også defineres.', //TODO
          'rosDialog.scopeError': 'ROS-analysen må ha et omfang',
          'scenarioDrawer.title': 'Risikoscenario',
          'scenarioDrawer.subtitle': 'En uønsket hendelse som potensielt kan ramme systemet',
          'scenarioDrawer.threatActorSubtitle': 'Noen som prøver å få tilgang til eller misbruke systemet',
          'scenarioDrawer.vulnerabilitySubtitle': 'Svakhet i systemet som kan utnyttes av trusselaktøren',
          'scenarioDrawer.consequenceTab.subtitle': 'Hvor alvorlig er den potensielle konsekvensen? Hvis konsekvensen gjelder flere kategorier velg det høyeste konsekvensnivået av disse.',
          'scenarioDrawer.probabilityTab.subtitle': 'Hvor stor sannsynlighet er det for at dette scenarioet vil forekomme. Dersom du er mellom to sannsynlighetsverdier velg den høyeste.',
          'scenarioDrawer.measureTab.subtitle': 'Hvilke tiltak bør gjøres for å unngå scenarioet?',
          'scenarioDrawer.measureTab.measureOwnerDescription': 'De eller den som er ansvarlig for at tiltaket blir gjennomført',
          'scenarioDrawer.measureTab.addMeasureButton': 'Legg til tiltak',
          'scenarioDrawer.measureTab.plannedMeasures': 'Planlagte tiltak',
          'scenarioDrawer.measureTab.existingMeasure': 'Eksisterende tiltak',
          'scenarioDrawer.measureTab.existingMeasureSubtitle': 'Kort beskrivelse av relevante tiltak som allerede har blitt gjennomført',
          'scenarioDrawer.restRiskTab.subtitle': 'Sett restrisiko for scenarioet. Restrisiko er konsekvens og sannsynlighet for scenarioet etter at alle tiltak i listen er gjennomført.',
          'scenarioDrawer.deleteScenarioButton': 'Slett scenario',
          'scenarioDrawer.deleteScenarioConfirmation': 'Er du sikker på at du vil slette scenario?',
          'scenarioDrawer.closeConfirmation': 'Vil du lagre endringene dine?',
          'consequenceTable.rows.1': 'Ubetydelig',
          'consequenceTable.rows.2': 'Liten',
          'consequenceTable.rows.3': 'Moderat',
          'consequenceTable.rows.4': 'Alvorlig',
          'consequenceTable.rows.5': 'Kritisk',
          'consequenceTable.columns.health': 'Liv og helse',
          'consequenceTable.columns.economical': 'Økonomisk',
          'consequenceTable.columns.privacy': 'Personvern',
          'consequenceTable.columns.reputation': 'Omdømme og tillit',
          'consequenceTable.cells.health.1': 'Liv og helse kan ikke være mindre alvorlig enn 3',
          'consequenceTable.cells.health.2': 'Liv og helse kan ikke være mindre alvorlig enn 3',
          'consequenceTable.cells.health.3': 'Midlertidig eller mindre alvorlige helsemessige konsekvenser',
          'consequenceTable.cells.health.4': 'Varige eller alvorlige helsemessige konsekvenser',
          'consequenceTable.cells.health.5': 'Død eller varige alvorlige helsemssige konsekvenser',
          'consequenceTable.cells.economical.1': 'Forbigående mindre økonomisk tap',
          'consequenceTable.cells.economical.2': 'Forbigående økonomisk tap',
          'consequenceTable.cells.economical.3': 'Økonomisk tap av noe varighet',
          'consequenceTable.cells.economical.4': 'Økonomisk tap av betydelig varighet for Kartverket og evt. tredjeparter',
          'consequenceTable.cells.economical.5': 'Varig og alvorlig økonomisk tap',
          'consequenceTable.cells.privacy.1': 'Retten til personvern utfordres i en svært kort periode og involverer ikke særlige kategorier/sårbare grupper',
          'consequenceTable.cells.privacy.2': 'Retten til personvern krenkes i en lengre periode eller involverer særlige kategorier/sårbare grupper',
          'consequenceTable.cells.privacy.3': 'Retten til personvern krenkes alvorlig i en lengre periode og involverer særlige kategorier/sårbare grupper',
          'consequenceTable.cells.privacy.4': 'Retten til personvern krenkes på en svært alvorlig måte',
          'consequenceTable.cells.privacy.5': 'Personvern kan ikke være mer alvorlig enn 4',
          'consequenceTable.cells.reputation.1': 'Midlertidig omdømmetap og liten innvirkning på tillit',
          'consequenceTable.cells.reputation.2': 'Negative saker i nasjonale medier som kan redusere tillit',
          'consequenceTable.cells.reputation.3': 'Varig negativ oppmerksomhet i nasjonale og internasjonale medier som kan redusere tillit',
          'consequenceTable.cells.reputation.4': 'Omdømme og tillit kan ikke være mer alvorlig enn 3',
          'consequenceTable.cells.reputation.5': 'Omdømme og tillit kan ikke være mer alvorlig enn 3',
          'probabilityTable.rows.1': 'Svært liten',
          'probabilityTable.rows.2': 'Liten',
          'probabilityTable.rows.3': 'Moderat',
          'probabilityTable.rows.4': 'Stor',
          'probabilityTable.rows.5': 'Svært stor',
          'probabilityTable.cells.1': 'Scenarioet er usannsynlig å inntreffe. Det inntreffer sjeldnere enn hvert 100. år',
          'probabilityTable.cells.2': 'Scenarioet er lite sannsynlig å inntreffe. Det kan inntreffe hvert 10. år',
          'probabilityTable.cells.3': 'Scenarioet kan inntreffe. Det kan inntreffe nærmest årlig',
          'probabilityTable.cells.4': 'Scenarioet vil med stor sannsynlighet inntreffe. Det kan inntreffe nærmest ukentlig',
          'probabilityTable.cells.5': 'Scenarioet er nesten garantert å inntreffe. Det kan inntreffe nærmest daglig',
        },
    })
  }
});