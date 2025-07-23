'use client'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { EmailSignup } from "@/components/email-signup"
import { Mail, CheckCircle, Clock, Inbox, Bell } from "lucide-react"
import { Calendar, Heart, Shield, Users } from "lucide-react"

export default function SundazeSortedLanding() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-[#E8E8E8]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#B4DAD8] rounded-full flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#2C2C2C]" />
            </div>
            <span className="text-xl font-semibold text-[#2C2C2C]">Sundaze Sorted</span>
          </div>
          <Button className="bg-[#B4DAD8] hover:bg-[#A0CCC9] text-[#2C2C2C] rounded-full px-6">Join Waitlist</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#B4DAD8]/20 to-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-[#2C2C2C] leading-tight">
                Never miss another permission slip deadline.
              </h1>
              <p className="text-xl md:text-2xl text-[#2C2C2C]/80 max-w-3xl mx-auto leading-relaxed">
                Spirit Day? Field trip form? Early dismissal? We already caught the update and added it to your calendar.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-6">
      
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#B4DAD8]/20 w-96 mx-auto">
              <EmailSignup />
              <p className="text-xs text-[#2C2C2C]/60 mt-4 leading-relaxed">
                You’re not the only one who’s over it.
              </p>
            </div>
              <p className="text-sm text-[#2C2C2C]/60 leading-relaxed">You’ll be first in line when we launch.         </p>
              
            </div>

     <div className="mt-12 relative flex justify-center">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-80 h-[680px] bg-[#2C2C2C] rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-[#B4DAD8] px-6 py-3 flex justify-between items-center text-white text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center">
                          <Mail className="w-2 h-2 text-white" />
                        </div>
                        <span className="font-medium text-xs">Sundaze</span>
                      </div>
                      <span className="font-medium">9:41 AM</span>
                      <span className="font-medium">100%</span>
                    </div>

                    {/* App Header */}
                    <div className="bg-[#FAFAFA] px-6 py-5 border-b border-gray-100">
                      <h1 className="text-[#2C2C2C] text-2xl font-bold text-center">Today</h1>
                      <p className="text-[#2C2C2C]/60 text-center text-sm mt-1">Tuesday, July 22</p>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-4 bg-[#FAFAFA] h-full overflow-y-auto pb-10">
                      {/* Birthday Party Invitation */}
                      <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-[#FFC4A3]">
                        <div className="text-center space-y-3">
                          <div className="space-y-2">
                            <h3 className="font-bold text-[#2C2C2C] text-base">Emma's Birthday Party</h3>
                            <p className="text-[#2C2C2C]/70 text-sm">Chuck E. Cheese, Southside</p>
                            <p className="text-[#2C2C2C]/60 text-sm">Saturday 2:00 PM</p>
                          </div>

                          <div className="py-2">
                            <div className="flex items-center justify-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-[#4B9B70]" />
                              <span className="text-sm text-[#4B9B70] font-medium">RSVP confirmed</span>
                            </div>
                          </div>

                          <div>
                            <button className="text-sm text-[#2C2C2C]/50 hover:text-[#2C2C2C]/70">
                              ➕ Add a reminder
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Field Trip Permission Slip */}
                      <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-[#B4DAD8]">
                        <div className="text-center space-y-3">
                          <div className="space-y-2">
                            <h3 className="font-bold text-[#2C2C2C] text-base">Science Museum Field Trip</h3>
                            <p className="text-[#2C2C2C]/70 text-sm">Grade 3 - Permission slip required</p>
                            <p className="text-[#2C2C2C]/60 text-sm">Due by Thursday</p>
                          </div>

                          <div className="py-2">
                            <div className="flex items-center justify-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-[#4B9B70]" />
                              <span className="text-sm text-[#4B9B70] font-medium">Form downloaded and ready</span>
                            </div>
                          </div>

                          <div>
                            <button className="text-sm text-[#2C2C2C]/50 hover:text-[#2C2C2C]/70">
                              ➕ Add a reminder
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Parent-Teacher Conference */}
                      <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-[#FF9B9B]">
                        <div className="text-center space-y-3">
                          <div className="space-y-2">
                            <h3 className="font-bold text-[#2C2C2C] text-base">Parent-Teacher Conference</h3>
                            <p className="text-[#2C2C2C]/70 text-sm">Mrs. Johnson - Room 204</p>
                            <p className="text-[#2C2C2C]/60 text-sm">Tomorrow 3:30 PM</p>
                          </div>

                          <div className="py-2">
                            <div className="flex items-center justify-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-[#4B9B70]" />
                              <span className="text-sm text-[#4B9B70] font-medium">Appointment confirmed</span>
                            </div>
                          </div>

                          <div>
                            <button className="text-sm text-[#2C2C2C]/50 hover:text-[#2C2C2C]/70">
                              ➕ Add a reminder
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* All caught up footer */}
                      <div className="text-center pt-6 pb-4">
                        <p className="text-sm text-[#2C2C2C]/40 font-medium">All caught up ✨</p>
                      </div>

                      {/* Bottom timestamp */}
                      <div className="text-center pb-6">
                        <p className="text-xs text-[#2C2C2C]/40">Last updated: 08:16 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating elements for visual appeal */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#FFC4A3] rounded-full opacity-60"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#B4DAD8] rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 md:py-24 bg-[#F5F1EB]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C]">
              School communication shouldn't feel like a second job
            </h2>

            <p className="text-lg md:text-xl text-[#2C2C2C]/80 max-w-2xl mx-auto leading-relaxed">
              Between emails, apps, and surprise theme days, it’s too much for one brain.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-white border-0 shadow-lg rounded-2xl p-6">
                <CardContent className="text-center space-y-4 p-0">
                  <div className="w-12 h-12 bg-[#FF9B9B] rounded-full flex items-center justify-center mx-auto">
                    <Inbox className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[#2C2C2C] font-medium leading-relaxed">"Did I miss the field trip form?"</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg rounded-2xl p-6">
                <CardContent className="text-center space-y-4 p-0">
                  <div className="w-12 h-12 bg-[#FFC4A3] rounded-full flex items-center justify-center mx-auto">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[#2C2C2C] font-medium leading-relaxed">"Is tomorrow early release?!"</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg rounded-2xl p-6">
                <CardContent className="text-center space-y-4 p-0">
                  <div className="w-12 h-12 bg-[#B4DAD8] rounded-full flex items-center justify-center mx-auto">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-[#2C2C2C] font-medium leading-relaxed">"I could've sworn I signed that..."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C]">We do the digging so you don't have to</h2>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B4DAD8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">📥 Read school emails and attachments</h3>
                    <p className="text-[#2C2C2C]/70 leading-relaxed">We scan every school email so you don't have to</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FFC4A3] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">
                      📝 Catch forms, picture days, spirit weeks
                    </h3>
                    <p className="text-[#2C2C2C]/70 leading-relaxed">
                      Never miss another permission slip or special event
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#FF9B9B] rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">
                      🗓 Add events directly to your calendar
                    </h3>
                    <p className="text-[#2C2C2C]/70 leading-relaxed">
                      Important dates automatically sync to your calendar
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#B4DAD8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#2C2C2C] mb-2">
                      📲 Intelligently sends event reminders
                    </h3>
                    <p className="text-[#2C2C2C]/70 leading-relaxed">
                      So you can buy the costume the week before dress up day and not the night before
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F1EB] rounded-2xl p-8 mt-12">
              <p className="text-2xl md:text-3xl font-medium text-[#2C2C2C] italic">
                "All the important stuff, already sorted."
              </p>
            </div>

            {/* Add this privacy reassurance */}
            <div className="flex justify-center mt-8">
              <p className="text-sm text-[#2C2C2C]/70 bg-[#F5F1EB] px-4 py-2 rounded-full">
                🔒 We only read the school emails you allow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#B4DAD8]/20 to-[#B4DAD8]/10">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]">Ready to get back to the good stuff?</h2>
              
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#B4DAD8]/20 max-w-md mx-auto">
              <EmailSignup />
              <p className="text-xs text-[#2C2C2C]/60 mt-4 leading-relaxed">
                Join local parents already on the waitlist
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-[#2C2C2C]/70">
              
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Benefit Section */}

      {/* Trust Section */}
      <section className="py-16 md:py-24 bg-[#F5F1EB]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C]">Built by a mom who gets it</h2>

            <div className="max-w-2xl mx-auto space-y-6">
              <div className="w-24 h-24 bg-[#B4DAD8] rounded-full flex items-center justify-center mx-auto">
                <Users className="w-12 h-12 text-white" />
              </div>

              <p className="text-lg md:text-xl text-[#2C2C2C]/80 leading-relaxed">
                Sundaze Sorted was created by a busy parent who wanted a smarter way to keep up.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <Card className="bg-[#F5F1EB] border-0 rounded-2xl p-6">
                  <CardContent className="text-center space-y-3 p-0">
                    <Shield className="w-8 h-8 text-[#2C2C2C] mx-auto" />
                    <h3 className="font-semibold text-[#2C2C2C]">Secure & Private</h3>
                    <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                      Your data is secure — we'll never share or sell your info
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#F5F1EB] border-0 rounded-2xl p-6">
                  <CardContent className="text-center space-y-3 p-0">
                    <Users className="w-8 h-8 text-[#2C2C2C] mx-auto" />
                    <h3 className="font-semibold text-[#2C2C2C]">Local First</h3>
                    <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                      Launching first in St. Johns County
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-[#F5F1EB] border-0 rounded-2xl p-6">
                  <CardContent className="text-center space-y-3 p-0">
                    <Heart className="w-8 h-8 text-[#2C2C2C] mx-auto" />
                    <h3 className="font-semibold text-[#2C2C2C]">Parent-Made</h3>
                    <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                      Built by parents, for parents who understand the struggle
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-[#E8E8E8]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-6 h-6 bg-[#B4DAD8] rounded-full flex items-center justify-center">
                <Mail className="w-3 h-3 text-[#2C2C2C]" />
              </div>
              <span className="text-lg font-medium text-[#2C2C2C]">Sundaze Sorted</span>
            </div>

            <p className="text-sm text-[#2C2C2C]/60">
              © 2025 Sundaze Sorted. Made with ❤️ by busy parents, for busy parents.
            </p>

            <div className="flex justify-center space-x-6 text-xs text-[#2C2C2C]/50"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}
