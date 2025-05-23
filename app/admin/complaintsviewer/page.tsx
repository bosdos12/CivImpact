"use"
import { AdminPageSingleComplaint, ComplaintsContainerFilterContainer, Header } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div className='pageContainer'>
      <Header activeButtonList={["active", ""]}/>

      <div className="complaints_container">
        <ComplaintsContainerFilterContainer />
        <div className="complaints_container-complaints_area">
          
        <AdminPageSingleComplaint
          complaintTitle='Probleme me autentikimin në E-Kosova'
          category='Sherbime Digjitale'
          status='Hapur'
          creationDate='21.05.2025, 09:30'
          description='Prej disa ditësh nuk po mund të kyçem në llogarinë time në E-Kosova. Kam provuar të resetoj fjalëkalimin, por emaili nuk vjen.'
          votes='56'
          responses={[]}
        />

        <AdminPageSingleComplaint
          complaintTitle='Qendra e Mjekësisë Familjare në lagjen Dardania ka mungesë të barnave'
          category='Shëndetësi'
          status='Në Proces'
          creationDate='20.05.2025, 14:12'
          description='Gjatë vizitës time në QMF, m’u tha se nuk kanë barna për trajtimin e hipertensionit dhe më udhëzuan të blej vetë. Kjo është e papranueshme.'
          votes='73'
          responses={[
            [
              "Përgjigje nga Ministria e Shëndetësisë",
              "Faleminderit për raportimin. Rasti është dërguar në drejtori dhe është duke u shqyrtuar furnizimi me barna esenciale në këtë QMF."
            ]
          ]}
        />

        <AdminPageSingleComplaint
          complaintTitle='Orari i autobuseve urbanë nuk respektohet'
          category='Transport dhe Infrastruktura'
          status='Përgjigjur'
          creationDate='18.05.2025, 07:45'
          description='Autobusi për linjën 4 shpesh nuk kalon në kohë. Ka ndodhur disa herë të pres mbi 40 minuta.'
          votes='89'
          responses={[
            [
              "Përgjigje nga Trafiku Urban",
              "Kemi identifikuar vonesa për shkak të punimeve në rrugë. Po rishikojmë orarin për këtë linjë dhe do të përditësohet javën e ardhshme."
            ]
          ]}
        />

        <AdminPageSingleComplaint
          complaintTitle='Lagjja jonë është pa ndriçim publik'
          category='Energji dhe Ujë'
          status='Përfunduar'
          creationDate='15.05.2025, 22:10'
          description='Që 3 javë nuk ka ndriçim publik në rrugën “Xhemajl Mustafa”. Është rrezik për këmbësorët.'
          votes='121'
          responses={[
            [
              "Përgjigje nga Komuna",
              "Ekipi ynë ka instaluar ndriçimin më 20.05.2025. Faleminderit për durimin dhe bashkëpunimin."
            ]
          ]}
        />

        <AdminPageSingleComplaint
          complaintTitle='Pamundësi për të marrë certifikatën e lindjes online'
          category='Administratë / Dokumente'
          status='Refuzuar'
          creationDate='17.05.2025, 11:20'
          description='Përkundër njoftimeve që shërbimet janë të digjitalizuara, nuk mund të marr certifikatën e lindjes për fëmijën tim përmes sistemit.'
          votes='44'
          responses={[
            [
              "Përgjigje nga Zyra për Regjistrim Civil",
              "Ky shërbim aktualisht ofrohet vetëm për individë të rritur. Digjitalizimi për fëmijë është në fazë testimi dhe do të lansohet më vonë."
            ]
          ]}
        />

        <AdminPageSingleComplaint
          complaintTitle='Shkolla jonë nuk ka ngrohje gjatë dimrit'
          category='Arsim'
          status='Në Proces'
          creationDate='19.05.2025, 08:00'
          description='Gjatë muajve të dimrit kemi pasur mësim me xhaketa sepse sistemi i ngrohjes nuk funksiononte në shkollën tonë.'
          votes='65'
          responses={[
            [
              "Përgjigje nga Drejtoria e Arsimit",
              "Po shqyrtohet zëvendësimi i sistemit ekzistues me një zgjidhje më efikase për ngrohje. Parashikohet të zgjidhet para fillimit të dimrit të ardhshëm."
            ]
          ]}
        />

        <AdminPageSingleComplaint
          complaintTitle='Grumbullim mbeturinash në hyrje të parkut të qytetit'
          category='Mjedisi dhe Pastrimi'
          status='Përfunduar'
          creationDate='14.05.2025, 16:40'
          description='Ka disa ditë që mbeturinat nuk janë mbledhur në hyrje të parkut të qytetit. Era përhap aromë të keqe.'
          votes='102'
          responses={[
            [
              "Përgjigje nga Kompania e Pastrimit",
              "Grumbullimi u krye më 16.05.2025 dhe pika është futur në planin e pastrimit të përditshëm. Faleminderit për njoftimin."
            ]
          ]}
        />

        <AdminPageSingleComplaint
          complaintTitle='Raste të sjelljes së pahijshme nga policia në lagjen Ulpiana'
          category='Siguri Publike / Rend'
          status='Hapur'
          creationDate='22.05.2025, 08:15'
          description='Ka raportime nga fqinjët për sjellje të ashpër dhe pa arsye të justifikuar nga disa pjesëtarë të policisë gjatë patrullimeve.'
          votes='87'
          responses={[]}
        />

        <AdminPageSingleComplaint
          complaintTitle='Pagesa të larta për faturën e ujit pa konsum të rritur'
          category='Energji dhe Ujë'
          status='Përgjigjur'
          creationDate='13.05.2025, 17:55'
          description='Kam marrë një faturë për ujin që është dyfish më e lartë se zakonisht, pa ndonjë ndryshim në konsum.'
          votes='48'
          responses={[
            [
              "Përgjigje nga Kompania e Ujit",
              "Ju rekomandojmë të bëni verifikimin e sahatit. Nëse ka gabim, pagesa do të rregullohet në faturën e ardhshme."
            ]
          ]}
        />

        <AdminPageSingleComplaint
          complaintTitle='Diskriminim gjatë intervistës për vend pune në administratë'
          category='Të Drejtat e Qytetarëve'
          status='Në Proces'
          creationDate='16.05.2025, 13:33'
          description='Gjatë një interviste për një pozitë në administratë, mu bënë pyetje të parëndësishme për pozitën dhe ndjeva paragjykim për shkak të përkatësisë etnike.'
          votes='91'
          responses={[
            [
              "Përgjigje nga Zyra për Barazi dhe të Drejta të Njeriut",
              "Kemi filluar shqyrtimin e rastit. Nëse gjendet shkelje e procedurave, do të ndërmerren masat përkatëse."
            ]
          ]}
        />
          
        </div>
      </div>
    </div>
  )
}

export default page